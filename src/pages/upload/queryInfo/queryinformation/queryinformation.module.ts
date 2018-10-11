import { QueryinformationServe } from './queryinformation.serve';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QueryinformationPage } from './queryinformation';
import { ComponentsModule } from './../../../../components/components.module';

@NgModule({
  declarations: [
    QueryinformationPage,
  ],
  imports: [
    IonicPageModule.forChild(QueryinformationPage),
    ComponentsModule,
  ],
  providers: [
    QueryinformationServe
  ]
})
export class QueryinformationPageModule {}
