import { DirectivesModule } from './../../directives/directives.module';
import { ComponentsModule } from './../../components/components.module';

import { HomePage } from './home';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';  
/** 图片预览 */
import { IonicImageViewerModule } from 'ionic-img-viewer';
/** 图片预览 */
import { LazyLoadImageModule } from 'ng-lazyload-image';


@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [ 
    IonicPageModule.forChild(HomePage),
    ComponentsModule, 
    IonicImageViewerModule, 
    LazyLoadImageModule,
    DirectivesModule
  ],
  providers:[ 
    
  ]
})
export class HomePageModel { }
