import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule} from '@angular/http';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Loginpage } from '../pages/loginpage/loginpage';
import { ProductCatalog } from '../pages/product-catalog/product-catalog';
import { PopoverPage } from '../pages/popover-page/popover-page';
import { ProductDescription } from '../pages/product-description/product-description';


import { AppService } from '../providers/app-service';
import { Loginservice } from '../providers/loginservice';
import { ProductService } from '../providers/product-service';
import { LoadingModal } from '../components/loading-modal/loading-modal';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Loginpage,
    ProductCatalog,
    PopoverPage,
    ProductDescription
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
    Loginpage,
    ProductCatalog,
    PopoverPage,
    ProductDescription
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppService,
    Loginservice,
    ProductService,
    LoadingModal,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
