import { RelevantdepartmentsServe } from './relevantdepartments.serve';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RelevantdepartmentsPage } from './relevantdepartments';

@NgModule({
  declarations: [
    RelevantdepartmentsPage,
  ],
  imports: [
    IonicPageModule.forChild(RelevantdepartmentsPage),
  ],
  providers:[
    RelevantdepartmentsServe
  ]
})
export class RelevantdepartmentsPageModule {}
