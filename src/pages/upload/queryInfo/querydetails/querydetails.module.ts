import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuerydetailsPage } from './querydetails';
import { QuerydetailsServe } from './querycheckation.serve';
import { PipesModule } from '../../../../pipes/pipes.module';

@NgModule({
  declarations: [
    QuerydetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(QuerydetailsPage),PipesModule
  ],
  providers:[
    QuerydetailsServe
  ]
})
export class QuerydetailsPageModule {}
