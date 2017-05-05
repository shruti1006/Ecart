import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProductService } from '../../providers/product-service';
import { AppService } from '../../providers/app-service';
import { LoadingModal } from '../../components/loading-modal/loading-modal';
/**
 * Generated class for the ProductCatalog page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-product-catalog',
  templateUrl: 'product-catalog.html',
})
export class ProductCatalog {

public currentCatId:any;
public productArray=[];
public imageBaseUrl:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public prdServ: ProductService,public appService:AppService, public loaderService: LoadingModal) {

  		loaderService.showModal();

	  this.imageBaseUrl=appService.ThumbNailUrl
	  this.currentCatId=navParams.get("catId");
	  this.prdServ.getProductsforCategory(this.currentCatId).subscribe(data => {

			this.productArray=data.items;
		
		});
  }

  ionViewDidLoad() {
  }

}
