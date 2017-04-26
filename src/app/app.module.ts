import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule} from '@angular/http';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Loginpage } from '../pages/loginpage/loginpage';

import { Loginservice } from '../providers/login/loginservice';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Loginpage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Loginpage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Loginservice,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
