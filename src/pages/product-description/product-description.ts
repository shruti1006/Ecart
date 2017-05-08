import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppService } from '../../providers/app-service';


/**
 * Generated class for the ProductDescription page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-product-description',
  templateUrl: 'product-description.html',
})
export class ProductDescription {

public currentProduct={};
public imageBaseUrl:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public appservice : AppService  ) {
  	this.currentProduct=navParams.get("product");
  	this.imageBaseUrl=appservice.ThumbNailUrl;
  	this.formatProduct(this.currentProduct);
  }

  formatProduct(Product){

  	for(let attr of Product.custom_attributes){
  		if(attr.attribute_code=='description')
  			this.currentProduct["desc"]=attr.value;
  		else if(attr.attribute_code=='image')
  			this.currentProduct["img"]=attr.value;
  	}
  }

  ionViewDidLoad() {
  }

}
