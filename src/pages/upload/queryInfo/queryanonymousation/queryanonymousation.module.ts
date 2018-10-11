import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QueryanonymousationPage } from './queryanonymousation';
import { ComponentsModule } from './../../../../components/components.module';
@NgModule({
  declarations: [
    QueryanonymousationPage,
  ],
  imports: [
    IonicPageModule.forChild(QueryanonymousationPage),
    ComponentsModule
  ],
})
export class QueryanonymousationPageModule {}
