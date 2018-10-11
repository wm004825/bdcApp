import { QueryotherinformationServe } from './queryotherinformation.serve';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QueryotherinformationPage } from './queryotherinformation';
import { ComponentsModule } from './../../../../components/components.module';

@NgModule({
  declarations: [
    QueryotherinformationPage,
  ],
  imports: [
    IonicPageModule.forChild(QueryotherinformationPage),
    ComponentsModule
  ],
  providers: [
    QueryotherinformationServe
  ]
})
export class QueryotherinformationPageModule { }
