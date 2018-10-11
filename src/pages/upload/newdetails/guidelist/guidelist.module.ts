import { GuidelistServe } from './guidelist.serve';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GuidelistPage } from './guidelist';

@NgModule({
  declarations: [
    GuidelistPage,
  ],
  imports: [
    IonicPageModule.forChild(GuidelistPage),
  ],
  providers: [
    GuidelistServe
  ]
})
export class GuidelistPageModule { }
