import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JetePage } from './jete';

@NgModule({
  declarations: [
    JetePage,
  ],
  imports: [
    IonicPageModule.forChild(JetePage),
  ],
})
export class JetePageModule {}
