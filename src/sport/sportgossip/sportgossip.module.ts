import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SportgossipPage } from './sportgossip';

@NgModule({
  declarations: [
    SportgossipPage,
  ],
  imports: [
    IonicPageModule.forChild(SportgossipPage),
  ],
})
export class SportgossipPageModule {}
