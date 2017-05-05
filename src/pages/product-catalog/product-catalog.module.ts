import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductCatalog } from './product-catalog';

@NgModule({
  declarations: [
    ProductCatalog,
  ],
  imports: [
    IonicPageModule.forChild(ProductCatalog),
  ],
  exports: [
    ProductCatalog
  ]
})
export class ProductCatalogModule {
	
	
}
