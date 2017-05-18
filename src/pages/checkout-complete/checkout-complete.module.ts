import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckoutComplete } from './checkout-complete';

@NgModule({
  declarations: [
    CheckoutComplete,
  ],
  imports: [
    IonicPageModule.forChild(CheckoutComplete),
  ],
  exports: [
    CheckoutComplete
  ]
})
export class CheckoutCompleteModule {}
