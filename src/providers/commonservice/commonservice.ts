import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HTTP } from '@ionic-native/http';
import { HttpHeaders } from '@angular/common/http';


import { AlertController } from 'ionic-angular';

/*
  Generated class for the CommonserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Basic Y2xvdWQuYWRtaW46SFVmRnlANldBVGNo',
    'Content-Type': 'application/json'

  }),

};





@Injectable()
export class CommonserviceProvider {



  channel: any;
  chaincode: any;
  chaincodeVer: any;
  API_URL: any;
  jsondata: any;
  API_inv_URL: any;

  constructor(public http: HTTP, public https: Http, private httpclient: HttpClient, private alertCtrl: AlertController) {
    console.log('Hello CommonserviceProvider Provider');

    this.channel = 'default';
    this.chaincode = 'gun2';
    this.chaincodeVer = 'v1';
    this.API_URL = 'https://3EE9983C6B0A43969A8253630B24F1B2.blockchain.ocp.oraclecloud.com:443/restproxy1/bcsgw/rest/v1/transaction/invocation';
    this.API_inv_URL = 'https://BA79E21CBFB44C87B4736086F7B36109.blockchain.ocp.oraclecloud.com:443/restproxy1/bcsgw/rest/v1/transaction/invocation '

  }



  readdata(bdata) {
    console.log()
    let jsonBody = {
      "channel": this.channel,
      "chaincode": this.chaincode,
      "method": "readOrder",
      "args": [bdata],
      "chaincodeVer": this.chaincodeVer
    };
    return this.httpclient.post(this.API_URL, jsonBody, httpOptions)

  }

  customerResponse(b_id, res, text) {
    console.log('barcode :' + b_id);
    console.log('Response : ' + res);
    console.log('text input :' + text);
    let jsonBody = {
      "channel": this.channel,
      "chaincode": this.chaincode,
      "method": "CustomerIssue",
      "args": [b_id, res, text],
      "chaincodeVer": this.chaincodeVer
    };
    return this.httpclient.post(this.API_inv_URL, jsonBody, httpOptions)
  }
  dateformatDDMMMYYYY(d) {
    var date = new Date(d)
    var m_names = new Array("Jan", "Feb", "Mar",
      "Apr", "May", "Jun", "Jul", "Aug", "Sep",
      "Oct", "Nov", "Dec");
    return date.getDate() + " " + m_names[date.getMonth()] + " " + date.getFullYear();
  }

  listGunsWithDealer(dealerName){
    console.log(dealerName);
    let jsonBody = {
      "channel": this.channel,
      "chaincode": this.chaincode,
      "method": "queryProduct",
      "args": ["{\"selector\":{\"Gun\":\"gun\",\"dealername\":\"" + dealerName + "\"}}"],
      "chaincodeVer": this.chaincodeVer
    };
    console.log(jsonBody);
    return this.httpclient.post(this.API_URL, jsonBody, httpOptions)
  }

  listGunsWithmanufacturer(manufacturerName){
    let jsonBody = {
      "channel": this.channel,
      "chaincode": this.chaincode,
      "method": "queryProduct",
      "args": ["{\"selector\":{\"Gun\":\"gun\",\"dealername\":\" " + manufacturerName + "\"}}"],
      "chaincodeVer": this.chaincodeVer
    };
    return this.httpclient.post(this.API_inv_URL, jsonBody, httpOptions)
  }

  addCustomer(ssn, name, age, location, address){
    console.log(ssn, name, age, location, address);
    let jsonBody = {
      "channel": this.channel,
      "chaincode": this.chaincode,
      "method": "initCustomer",
      "args": [ssn, name, age, location, address],
      "chaincodeVer": this.chaincodeVer
    };

    console.log(jsonBody);
    console.log(this.httpclient.post(this.API_URL, jsonBody, httpOptions))
    return this.httpclient.post(this.API_URL, jsonBody, httpOptions);
  }

  transferToCustomer(gunId, dealerName, CustomerName, ssn){
    let jsonBody = {
      "channel": this.channel,
      "chaincode": this.chaincode,
      "method": "initCustomer",
      "args": [gunId, dealerName, CustomerName, ssn],
      "chaincodeVer": this.chaincodeVer
    };

    return this.httpclient.post(this.API_URL, jsonBody, httpOptions);
  }

  readPersona(ssn){
    let jsonBody = {
      "channel": this.channel,
      "chaincode": this.chaincode,
      "method": "readPersona",
      "args": [ssn],
      "chaincodeVer": this.chaincodeVer
    };
    return this.httpclient.post(this.API_URL, jsonBody, httpOptions);
  }

  transferProductToCustomer(gunId, delaerName, custName, custSsn){
    let jsonBody = {
      "channel": this.channel,
      "chaincode": this.chaincode,
      "method": "transferProductToCustomer",
      "args": [gunId, delaerName, custName, custSsn],
      "chaincodeVer": this.chaincodeVer
    };

    return this.httpclient.post(this.API_URL, jsonBody, httpOptions);
  }
  
  
  getHistoryForProduct(gunId){
    let jsonBody = {
      "channel": this.channel,
      "chaincode": this.chaincode,
      "method": "getHistoryForProduct",
      "args": [gunId],
      "chaincodeVer": this.chaincodeVer
    };
    return this.httpclient.post(this.API_URL, jsonBody, httpOptions);
  }

  readGunWithCustomer(custname){
    let jsonBody = {
      "channel": this.channel,
      "chaincode": this.chaincode,
      "method": "queryProduct",
      "args": ["{\"selector\":{\"Gun\":\"gun\",\"owner\":\"" + custname + "\"}}"],
      "chaincodeVer": this.chaincodeVer
    };
    return this.httpclient.post(this.API_URL, jsonBody, httpOptions);
  }
    
  

}



