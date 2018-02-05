import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GossipPage } from "./gossip";
import {SharedModule} from "../../app/shared.module";

@NgModule({
  declarations: [
    GossipPage
  ],
  imports: [
    IonicPageModule.forChild(GossipPage),
    SharedModule
  ]
})
export class sharedModule {}
