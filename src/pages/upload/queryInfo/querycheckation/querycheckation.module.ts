import { ComponentsModule } from './../../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuerycheckationPage } from './querycheckation';
import { QueryCheckationServe } from './querycheckation.serve';

@NgModule({
  declarations: [
    QuerycheckationPage,
  ],
  imports: [
    IonicPageModule.forChild(QuerycheckationPage),
    ComponentsModule
  ],
  providers: [
    QueryCheckationServe,
  ]
})
export class QuerycheckationPageModule { }
