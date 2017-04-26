import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Loginpage } from './loginpage';

@NgModule({
  declarations: [
    Loginpage,
  ],
  imports: [
    IonicPageModule.forChild(Loginpage),
  ],
  exports: [
    Loginpage
  ]
})
export class LoginpageModule {}
