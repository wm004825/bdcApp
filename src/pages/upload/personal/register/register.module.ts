import { DirectivesModule } from './../../../../directives/directives.module';
import { RegisterServe } from './register.serve';
import { ComponentsModule } from './../../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';

@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
    DirectivesModule,
    ComponentsModule,
  ],
  providers: [
    RegisterServe
  ]
})
export class RegisterPageModule { }
