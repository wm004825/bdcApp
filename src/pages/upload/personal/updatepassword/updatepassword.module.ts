import { UpdatepasswordServe } from './updatepassword.serve';
import { ComponentsModule } from './../../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpdatepasswordPage } from './updatepassword'; 

@NgModule({
  declarations: [
    UpdatepasswordPage,
  ],
  imports: [
    IonicPageModule.forChild(UpdatepasswordPage),
    ComponentsModule
  ],
  providers: [
    UpdatepasswordServe
  ]
})
export class UpdatepasswordPageModule {}
