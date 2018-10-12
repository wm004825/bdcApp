import { ComponentsModule } from './../../components/components.module';

import { HomePage } from './home';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';  
/** 图片预览 */
import { IonicImageViewerModule } from 'ionic-img-viewer';
/** 图片预览 */
 
@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [ 
    IonicPageModule.forChild(HomePage),
    ComponentsModule, 
    IonicImageViewerModule, 
  ],
  providers:[ 
  ]
})
export class HomePageModel { }
