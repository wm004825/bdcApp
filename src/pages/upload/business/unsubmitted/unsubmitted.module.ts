import { PipesModule } from './../../../../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UnsubmittedPage } from './unsubmitted';
import { ComponentsModule } from './../../../../components/components.module';
import { UnsubmittedServe } from './unsubmitted.serve'; 
@NgModule({
  declarations: [
    UnsubmittedPage,
  ],
  imports: [
    IonicPageModule.forChild(UnsubmittedPage),
    ComponentsModule,
    PipesModule
    
  ],
  providers:[
    UnsubmittedServe,
  ]
})
export class UnsubmittedPageModule {}
