import { PublicFunction } from './../../public/public.function';
import { QueryForm } from '../../pages/upload/queryInfo/currency/query.form';
import { Component, Input } from '@angular/core';
import { FormArray } from "@angular/forms";
import { RegularExpression } from '../../infrastructure/regular-expression';
import { AlertController } from 'ionic-angular';
import { FormGroup } from '@angular/forms';

/**
 * 曾用名的demol 
 */
@Component({
  selector: 'beforename',
  templateUrl: 'beforename.html'
})
export class BeforenameComponent {
  /**
     * 从组件上获取的对象
     */
  @Input() form: FormGroup;

  /**
   * 判断是机构查档还是个人查档
   * 0是个人查档    1是机构查档
   */
  @Input() query: number;

  /**
   * 判断是否是家庭档
   */
  @Input() queryFamily: number;

  @Input() formErrors:any;
  constructor(private queryForm: QueryForm, private publicFunction: PublicFunction, private alertCtrl: AlertController, ) {
    
  }


  /**
   * 添加曾用名
   * @param i 从页面返回的1级索引
   * @param a 从页面返回的2级索引
   */
  newForm(i: number, a: number) {
    let data = this.form.get('data') as FormArray;
    let arr = data.controls[i].get('arr') as FormArray;
    let group = arr.controls[a] as FormGroup; 
    if (arr.value[a].name != '') { 
      group.controls['isAdd'].setValue(true)  
      arr.push(this.queryForm.createFormName())
    } else {
      this.publicFunction.newToast("请输入您的曾用名");
    }
  }

  /**
   * 删除曾用名
   * @param i 从页面返回的1级索引
   * @param a 从页面返回的2级索引
   */
  removeForm(i: number, a: number) {
    let data = this.form.get('data') as FormArray;
    let arr = data.controls[i].get('arr') as FormArray;
    arr.length == 1 ? '' : arr.removeAt(a) // 根据索引移除对应的表单
  }


  /**
   * 认证家庭成员
   * @param i 从页面返回的1级索引
   */
  familyPersonalQuery(i: number) {
    let data = this.form.get('data') as FormArray;
    let group = data.controls[i] as FormGroup; 
    // this.authActionSheet.actionSheet(this.FamilyList[firstIndex].personName, this.FamilyList[firstIndex].personNo, this.user.userName).subscribe(value => {
      group.controls['auth'].setValue(true)
    // });
  }

  /**
   * 添加家庭成员
   */
  addFamily() {
    let alert = this.alertCtrl.create({
      title: '添加家庭成员',
      subTitle: '请输入姓名身份证号码',
      inputs: [
        {
          name: 'personName',
          placeholder: '姓名',

        },
        {
          name: 'personNo',
          placeholder: '身份证号码'
        }
      ],
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: data => {

          }
        },
        {
          text: '添加',
          handler: data => {
            if (data.personNo == "") {
              return;
            }
            if (!RegularExpression.matchIDCard.test(data.personNo) && data.personNo != "") {
              this.publicFunction.newToast('身份证不匹配');
              return;
            } else {
              let dataBody = this.form.get('data') as FormArray;
              let newForm = this.queryForm.createFormFamilyData(1);
              newForm.patchValue({
                personNo: data.personNo,
                userName: data.personName
              })
              dataBody.push(newForm);
            }
          }
        }
      ]
    });
    alert.present();
  }

  /**
    * 删除家庭成员
    *@param i 从页面返回的1级索引
    */
  deleteFamilyPersonal(i: number) {
    let data = this.form.get('data') as FormArray;
    data.length == 1 ? '' : data.removeAt(i) // 根据索引移除对应的表单
  }
}
