import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HTTP } from '@ionic-native/http';


import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { GovhomePage } from '../pages/govhome/govhome';
import { GovsecscreenPage } from '../pages/govsecscreen/govsecscreen';
import { ManfhomePage } from '../pages/manfhome/manfhome';
import { CommonserviceProvider } from '../providers/commonservice/commonservice';
import { DealerPage } from '../pages/dealer/dealer';
import { ListGunDealerPage } from '../pages/list-gun-dealer/list-gun-dealer';
import { CushomePage } from '../pages/cushome/cushome';
import { HistoryPage } from '../pages/history/history';



@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    GovhomePage,
    GovsecscreenPage,
    ManfhomePage,
    DealerPage,
    ListGunDealerPage,
    CushomePage,
    HistoryPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    GovhomePage,
    GovsecscreenPage,
    ManfhomePage,
    DealerPage,
    ListGunDealerPage,
    CushomePage,
    HistoryPage
  ],
  providers: [
    HTTP,
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    CommonserviceProvider
  ]
})
export class AppModule { }
