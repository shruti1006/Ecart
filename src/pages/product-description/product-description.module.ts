import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductDescription } from './product-description';

@NgModule({
  declarations: [
    ProductDescription,
  ],
  imports: [
    IonicPageModule.forChild(ProductDescription),
  ],
  exports: [
    ProductDescription
  ]
})
export class ProductDescriptionModule {}
