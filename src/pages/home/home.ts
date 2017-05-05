import { Component } from '@angular/core';
import { NavController,MenuController,PopoverController } from 'ionic-angular';

import { ProductService } from '../../providers/product-service';
import { LoadingModal } from '../../components/loading-modal/loading-modal';
import { AppService } from '../../providers/app-service';
import { PopoverPage } from '../popover-page/popover-page';
import { ProductCatalog } from '../product-catalog/product-catalog';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public categoriesArray=[];
public displayArray=[];
public imageBaseUrl:string;


  constructor(public navCtrl: NavController,public menu: MenuController, public productService: ProductService, public loaderservice: LoadingModal,public appservice : AppService, public popoverCtrl: PopoverController) {
  		loaderservice.showModal();
  		this.productService.getCategories().subscribe(data =>this.formatCategories(data));
  		this.imageBaseUrl=appservice.ThumbNailUrl;

  }

  

  formatCategories(categories){
  	var categoryArray=categories.children_data;
  	for(let data of categoryArray) 
  	{
  		if(data.product_count)
  		{
  			var childArray=data.children_data
  			for(let child of childArray)
  			{
  				if(child.product_count)
  				{
  					this.categoriesArray.push({"id":child.id,"categoryName":child.name,"categoryProducts":[]});
  				}
  			}
  		}
		
	}	
	var i=0;

	for(let n of this.categoriesArray)
	{
		this.productService.getProductsforCategory(n.id).subscribe(data => {
		console.log("inside map");

			n.categoryProducts=data.items.slice(0, 4);
			console.log(n.categoryProducts);
			i++;
			if(i== this.categoriesArray.length)
			{
				console.log(this.categoriesArray);
				this.displayArray=this.categoriesArray;
				this.loaderservice.hideModal();
			}
		})
		
	}

  }
 
  openPopover(myEvent){

  	let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }
  
  ionViewDidLoad() {
    this.menu.swipeEnable(true, 'CategoriesMenu');
    
  }

  loadMore(catId){
  var category_id=catId;

  		console.log("catId="+catId);
  		this.navCtrl.push(ProductCatalog, {catId:category_id});
  }

}
