import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductService } from '../../providers/product-service';
import { LoadingModal } from '../../components/loading-modal/loading-modal';
import { Storage } from '@ionic/storage';
import { ProductDescription } from '../product-description/product-description';



/**
 * Generated class for the SearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-search-page',
  templateUrl: 'search-page.html',
})
export class SearchPage {
@ViewChild('srchInput') myInput;

public searchResult:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage,public productService: ProductService, public loader: LoadingModal) {

   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
     //this.myInput.setFocus();
    
  }

  getItems(ev)
  {
  	var Searchval = ev.target.value;
  	console.log("Search Val="+Searchval);
  	if(Searchval.length>2){

  		this.storage.get('token').then((val) => {

		        var token=val;
		        this.productService.getSearchProducts(token,Searchval).subscribe(data=>{
					 
		             console.log(data);
		             this.searchResult=data.items;
       			});

  		  });

  	}
  	

  }

  itemSelected(item){
  	console.log("itemSelected");
  	var descProduct=item;
    this.navCtrl.push(ProductDescription,{product:descProduct});
  }

}
