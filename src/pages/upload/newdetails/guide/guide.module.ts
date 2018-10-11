import { GuideServe } from './guide.serve';
import { ComponentsModule } from './../../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GuidePage } from './guide';

@NgModule({
  declarations: [
    GuidePage,
  ],
  imports: [
    IonicPageModule.forChild(GuidePage),
    ComponentsModule
  ],
  providers:[
    GuideServe
  ]
})
export class GuidePageModule {}
