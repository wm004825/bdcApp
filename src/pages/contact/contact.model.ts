import { ContactPage } from './contact';
import { ComponentsModule } from './../../components/components.module';

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular'; 
@NgModule({
  declarations: [
    ContactPage,
  ],
  imports: [ 
    IonicPageModule.forChild(ContactPage),
    ComponentsModule
  ],
  providers:[ 
      
  ]
})
export class ContactPageModel { }
