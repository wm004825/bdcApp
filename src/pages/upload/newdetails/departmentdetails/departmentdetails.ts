import { iInfoEntity, introsModeModule } from './departmentdetails.entity';
import { DepartmentdetailsServe } from './departmentdetails.serve';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * 部门详情
 */

@IonicPage()
@Component({
  selector: 'page-departmentdetails',
  templateUrl: 'departmentdetails.html',
})
export class DepartmentdetailsPage {
  iInfoEntity: iInfoEntity;
  intros:introsModeModule;
  constructor(public navCtrl: NavController, public navParams: NavParams, private departmentdetailsServe: DepartmentdetailsServe) {
    this.iInfoEntity = { Id: navParams.get('Id') }
  }

  ngOnInit() {
    this.departmentdetailsServe.getIInfo(this.iInfoEntity).subscribe(data=>{
      this.intros = data; 
    })
  }

}
