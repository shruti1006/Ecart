import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { HomePage } from '../pages/home/home';
import { Loginpage } from '../pages/loginpage/loginpage';
import { ProductService } from '../providers/product-service';
import { ProductCatalog } from '../pages/product-catalog/product-catalog';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = Loginpage;
  shownGroup:any = null;
  categories=[];
  showSubgroup:any=null;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, productService: ProductService, public navCtrl: NavController) {
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

  toggleSubCategory(event,subCategory){
   event.stopPropagation();
    if (this.isSubGroupShown(subCategory)) {
        this.showSubgroup = null;
    } else {
        this.showSubgroup = subCategory;
    }

  }

  isGroupShown(group) {
    return this.shownGroup === group;
  };

  isSubGroupShown(group){
    return this.showSubgroup === group;
  }

  loadCatalog(catId){
      var category_id=catId;
      console.log("catId="+catId);
      this.navCtrl.push(ProductCatalog, {catId:category_id});
  }

}

