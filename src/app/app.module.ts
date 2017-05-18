import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule} from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { Network } from '@ionic-native/network';




import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Loginpage } from '../pages/loginpage/loginpage';
import { ProductCatalog } from '../pages/product-catalog/product-catalog';
import { PopoverPage } from '../pages/popover-page/popover-page';
import { ProductDescription } from '../pages/product-description/product-description';
import { Cartpage } from '../pages/cartpage/cartpage';
import { ShippingAddressPage } from '../pages/shipping-address-page/shipping-address-page';
import { Checkoutpage } from '../pages/checkoutpage/checkoutpage';
import { CheckoutComplete } from '../pages/checkout-complete/checkout-complete';
import { SearchPage } from '../pages/search-page/search-page';




import { AppService } from '../providers/app-service';
import { Loginservice } from '../providers/loginservice';
import { ProductService } from '../providers/product-service';
import { CartService } from '../providers/cart-service';
import { LoadingModal } from '../components/loading-modal/loading-modal';
import { NetworkService } from '../providers/network-service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Loginpage,
    ProductCatalog,
    PopoverPage,
    Cartpage,
    ShippingAddressPage,
    Checkoutpage,
    ProductDescription,
    CheckoutComplete,
    SearchPage,
    LoadingModal
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Loginpage,
    ProductCatalog,
    PopoverPage,
    Cartpage,
    ShippingAddressPage,
    Checkoutpage,
    CheckoutComplete,
    SearchPage,
    ProductDescription
  ],
  providers: [
    StatusBar,
    Network,
    SplashScreen,
    AppService,
    Loginservice,
    ProductService,
    CartService,
    NetworkService,
    LoadingModal,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
