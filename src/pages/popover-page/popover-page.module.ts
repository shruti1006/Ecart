import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopoverPage } from './popover-page';

@NgModule({
  declarations: [
    PopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(PopoverPage),
  ],
  exports: [
    PopoverPage
  ]
})
export class PopoverPageModule {}
