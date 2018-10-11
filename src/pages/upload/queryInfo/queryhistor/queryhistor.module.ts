import { ComponentsModule } from './../../../../components/components.module';
import { QueryhistorServe } from './queryhistor.serve';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QueryhistorPage } from './queryhistor';

@NgModule({
  declarations: [
    QueryhistorPage,
  ],
  imports: [
    IonicPageModule.forChild(QueryhistorPage),
    ComponentsModule
  ],
  providers: [
    QueryhistorServe,
  ]
})
export class QueryhistorPageModule { }
