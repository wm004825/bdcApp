import { ComponentsModule } from './../../components/components.module';

import { HomePage } from './home';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular'; 
@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [ 
    IonicPageModule.forChild(HomePage),
    ComponentsModule
  ],
  providers:[ 
  ]
})
export class HomePageModel { }
