import { RequestPersons } from './../onlinepretrialdetails/onlinepretrialdetails.entity';
import { PublicValidation } from './../../../../public/public.validation';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { personType } from './../currency/handle.variable';
import { addpeopleEntity } from './addpeople.entity';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { shareType, idType } from '../currency/handle.variable';
import { forRegExpValidator, allFrom } from '../../../../public/Independent.function';
import { RegularExpression } from './../../../../infrastructure/regular-expression';
import { selectData } from '../../../../public/public.entity';
/**
 * 添加权利人或者义务人
 */

@IonicPage()
@Component({
  selector: 'page-addpeople',
  templateUrl: 'addpeople.html',
})
export class AddpeoplePage {

  addpeopleEntity: addpeopleEntity = {
    shareType: shareType,
    idType: idType,
    personType: personType,
    RoleName: '',
    type: '',
    index: 0,
  }
  form: FormGroup;
  /**
   * 表单错误信息
   */
  formErrors = {
    PersonName: '',
    PaperNo: '',
    MobileNo: '',
  };

  /**
   * 错误信息模版
   */
  validationMessages = {
    PersonName: PublicValidation.userName,
    PaperNo: PublicValidation.personNo,
    MobileNo: PublicValidation.phoneNumber,
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, ) {
    this.addpeopleEntity.RoleName = navParams.get('RoleName');
    this.addpeopleEntity.RequestPersons = navParams.get('requestPersons');
    this.addpeopleEntity.type = navParams.get('type');
    let index = this.addpeopleEntity.index = navParams.get('index');
    this.createForm();

    /**
     * 修改权利人
     */
    if (this.addpeopleEntity.type == 'check') {
      let RequestPersons = this.addpeopleEntity.RequestPersons;
      this.form.get('PersonName').setValue(RequestPersons[index].PersonName);
      this.form.get('PaperNo').setValue(RequestPersons[index].PaperNo);
      this.form.get('MobileNo').setValue(RequestPersons[index].MobileNo);

      if (RequestPersons[index].Address) this.form.get('Address').setValue(RequestPersons[index].Address);

      //给类型赋予对象的默认值
      this.setSelectDefault(RequestPersons[index].PersonType, this.addpeopleEntity.personType);

      //给证件类型赋予对象的默认值
      this.setSelectDefault(RequestPersons[index].PaperName, this.addpeopleEntity.idType);

      //给共有方式赋予对象的默认值
      this.setSelectDefault(RequestPersons[index].ShareType, this.addpeopleEntity.shareType);

    } else {
      this.addpeopleEntity.personType.index = this.addpeopleEntity.idType.index = this.addpeopleEntity.shareType.index = 0;
    }
  }

  ngOnInit() {

  }

  createForm() {
    if (this.addpeopleEntity.type == 'check') {
      this.form = this.fb.group({
        MobileNo: ['', [Validators.required]],
        PaperNo: ['', [Validators.required]],
        PersonName: ['', [Validators.required, Validators.minLength(1)]],
        Address: ''
      });
    } else {
      this.form = this.fb.group({
        MobileNo: ['', [Validators.required, forRegExpValidator(RegularExpression.matchPhone, 'MobileNo')]],
        PaperNo: ['', [Validators.required, forRegExpValidator(RegularExpression.matchIDCard, 'PaperNo')]],
        PersonName: ['', [Validators.required, Validators.minLength(1)]],
        Address: ''
      });
    }
    allFrom(this.form, this.formErrors, this.validationMessages);


  }

  /**
   * 点击保存
   */
  onClick() {
    let requestPersons: RequestPersons = {};
    if (this.addpeopleEntity.type == 'check') requestPersons = this.addpeopleEntity.RequestPersons[this.addpeopleEntity.index];
    requestPersons.PersonName = this.form.get('PersonName').value;
    requestPersons.PaperNo = this.form.get('PaperNo').value;
    requestPersons.MobileNo = this.form.get('MobileNo').value;
    requestPersons.Address = this.form.get('Address').value;
    requestPersons.ShareType = this.addpeopleEntity.shareType.value;
    requestPersons.RoleName = this.addpeopleEntity.RoleName;
    requestPersons.PersonType = this.addpeopleEntity.personType.value;
    requestPersons.PaperName = this.addpeopleEntity.idType.value;
    if (this.addpeopleEntity.type == 'add') {
      requestPersons.Keeper = this.addpeopleEntity.RoleName == '权利人' ? true : false;
      this.addpeopleEntity.RequestPersons.push(requestPersons);
    }
    this.navCtrl.pop();
  }

  goBack() {
    this.navCtrl.pop();
  }


  /**
   * 修改了证件类型
   * 如果切换了证件类型。身份证的输入则不校验
   */
  onVoted() {
    this.form.get('PaperNo').setValue('');
    this.form.get('PaperNo').valueChanges.subscribe(data => {
      let validators = this.addpeopleEntity.idType.value == '身份证' ? forRegExpValidator(RegularExpression.matchIDCard, 'PaperNo') : Validators.minLength(1);
      this.form.get('PaperNo').setValidators([Validators.required, validators]);
    })
  }

  /**
   *  点击模版
   */
  addTemplate() {
    this.form.get('MobileNo')
  }


  /**
   * 设置select 默认值
   * @param value 判断默认值是否为空
   * @param select 迭代的select 对象
   */
  setSelectDefault(value: string, select: selectData) {
    console.log(value);
    console.log(select);
    if (value == undefined) {
      select.index = 0;
      return false;
    }

    select.list.forEach((data, i) => {
      if (data.Value == value) {
        select.index = i;
      }
    })

  }
}
