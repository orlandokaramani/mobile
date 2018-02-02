import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SportPage } from "./sport";
import {SharedModule} from "../../app/shared.module";

@NgModule({
  declarations: [
    SportPage
  ],
  imports: [
    IonicPageModule.forChild(SportPage),
    SharedModule
  ]
})
export class Module {}
