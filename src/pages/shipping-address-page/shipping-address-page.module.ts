import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShippingAddressPage } from './shipping-address-page';

@NgModule({
  declarations: [
    ShippingAddressPage,
  ],
  imports: [
    IonicPageModule.forChild(ShippingAddressPage),
  ],
  exports: [
    ShippingAddressPage
  ]
})
export class ShippingAddressPageModule {}
