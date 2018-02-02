import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KulturePage } from './kulture';

@NgModule({
  declarations: [
    KulturePage,
  ],
  imports: [
    IonicPageModule.forChild(KulturePage),
  ],
})
export class KulturePageModule {}
