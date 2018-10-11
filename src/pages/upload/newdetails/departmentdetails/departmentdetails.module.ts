import { DepartmentdetailsServe } from './departmentdetails.serve';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DepartmentdetailsPage } from './departmentdetails';

@NgModule({
  declarations: [
    DepartmentdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(DepartmentdetailsPage),
  ],
  providers:[
    DepartmentdetailsServe
  ]
})
export class DepartmentdetailsPageModule {}
