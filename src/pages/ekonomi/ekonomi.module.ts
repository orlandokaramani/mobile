import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EkonomiPage } from './ekonomi';

@NgModule({
  declarations: [
    EkonomiPage,
  ],
  imports: [
    IonicPageModule.forChild(EkonomiPage),
  ],
})
export class EkonomiPageModule {}
