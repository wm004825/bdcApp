import { OnlinepretrialdetailsServe } from './onlinepretrialdetails.serve';
import { ComponentsModule } from './../../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OnlinepretrialdetailsPage } from './onlinepretrialdetails';

@NgModule({
  declarations: [
    OnlinepretrialdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(OnlinepretrialdetailsPage),
    ComponentsModule
  ],
  providers:[
    OnlinepretrialdetailsServe
  ]
})
export class OnlinepretrialdetailsPageModule {}
