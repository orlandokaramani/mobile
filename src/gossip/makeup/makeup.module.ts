import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MakeupPage } from './makeup';

@NgModule({
  declarations: [
    MakeupPage,
  ],
  imports: [
    IonicPageModule.forChild(MakeupPage),
  ],
})
export class MakeupPageModule {}
