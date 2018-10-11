import { OnlineverificationServe } from './onlineverification.serve';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OnlineverificationPage } from './onlineverification';
import { ComponentsModule } from './../../../../components/components.module';
@NgModule({
  declarations: [
    OnlineverificationPage,
  ],
  imports: [
    IonicPageModule.forChild(OnlineverificationPage),
    ComponentsModule
  ],
  providers:[
    OnlineverificationServe
  ]
})
export class OnlineverificationPageModule {}
