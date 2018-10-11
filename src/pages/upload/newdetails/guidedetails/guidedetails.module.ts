import { GuidedetailsServe } from './guidedetails.serve';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GuidedetailsPage } from './guidedetails';

@NgModule({
  declarations: [
    GuidedetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(GuidedetailsPage),
  ],
  providers:[
    GuidedetailsServe
  ]
})
export class GuidedetailsPageModule {}
