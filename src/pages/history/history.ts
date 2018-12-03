import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  history:any;
  tempGunMap = {
    guns:[]
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.history = JSON.parse(localStorage.getItem('history'));
    console.log(typeof(this.history));
    console.log("history from local\n" +  JSON.stringify(this.history));

    for( let i = 0; i < this.history.length ; i++ )  {
      console.log("i= " + i);
      this.tempGunMap.guns.push( [ this.history[i]["Value"], this.history[i]["Timestamp"] ] )
    };
    console.log("tempGun")
    console.log(this.tempGunMap);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }

}
