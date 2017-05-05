import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { HomePage } from '../pages/home/home';
import { Loginpage } from '../pages/loginpage/loginpage';
import { ProductService } from '../providers/product-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = Loginpage;
  shownGroup:any = null;
  categories=[];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, productService: ProductService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      productService.getCategories().subscribe(data =>{this.categories=data});

    });
  }

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
  };

  isGroupShown(group) {
    return this.shownGroup === group;
  };

}

