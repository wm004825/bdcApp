import { PublicFunction } from './../../../../public/public.function';
import { newData } from './../currency/newdetails.variable';
import { DepartmentdetailsPage } from './../departmentdetails/departmentdetails';
import { RelevantdepartmentsServe } from './relevantdepartments.serve';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * 相关部门
 */

@IonicPage()
@Component({
  selector: 'page-relevantdepartments',
  templateUrl: 'relevantdepartments.html',
})
export class RelevantdepartmentsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private relevantdepartmentsServe: RelevantdepartmentsServe,private publicFunction:PublicFunction) {

  }
  department: any;

  ngOnInit() {
    if (newData.department.length == 0) {
      this.init();
      return false;
    }
    this.department = newData.department

  }


  init(then?: Function) {
    newData.department = [];
    this.relevantdepartmentsServe.getIntroduction().subscribe(data => {
      this.department = data.Introduction;
      this.department.forEach(value => {
        newData.department.push(value);
      });
      if (then) then();
    })
  }

  /**
   * 上拉刷新页面
   * @param refresher 据页面传回来的event
   */
  doRefresh(refresher: any) {
    this.init(() => {
      refresher.complete(); 
      this.publicFunction.newToast('刷新成功',3000,'bottom');
    });
  }

  /**
   * 跳转详情
   * @param id 从页面获取的值
   */
  goDetails(id: string) {
    this.navCtrl.push(DepartmentdetailsPage, { Id: id });
  }

}
