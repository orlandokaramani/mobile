import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BlogPage } from "./blog";
import {SharedModule} from "../../app/shared.module";

@NgModule({
  declarations: [
    BlogPage
  ],
  imports: [
    IonicPageModule.forChild(BlogPage),
    SharedModule
  ]
})
export class sharedModule {}
