import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Checkoutpage } from './checkoutpage';

@NgModule({
  declarations: [
    Checkoutpage,
  ],
  imports: [
    IonicPageModule.forChild(Checkoutpage),
  ],
  exports: [
    Checkoutpage
  ]
})
export class CheckoutpageModule {}
