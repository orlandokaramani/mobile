import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GossippostPage } from './gossippost';

@NgModule({
  declarations: [
    GossippostPage,
  ],
  imports: [
    IonicPageModule.forChild(GossippostPage),
  ],
})
export class GossippostPageModule {}
