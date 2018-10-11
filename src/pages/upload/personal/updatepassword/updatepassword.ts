import { UpdatepasswordServe } from './updatepassword.serve';
import { PublicFunction } from './../../../../public/public.function';
import { PublicValidation } from './../../../../public/public.validation';
import { verificationCodeEntity } from './../../../../public/public.entity';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { forRegExpValidator, allFrom, } from '../../../../public/Independent.function';
import { RegularExpression } from './../../../../infrastructure/regular-expression';
import { updatePasswordCodeEntity, updatePasswordEntity } from './updatepassword.entity';

/**
 * 修改密码
 */

@IonicPage()
@Component({
  selector: 'page-updatepassword',
  templateUrl: 'updatepassword.html',
})
export class UpdatepasswordPage {
  formErrors = {
    phoneNumber: '',
    validCode: '',
    passWord: '',
    conFirmPassWord: ''
  };
  validationMessages = {
    phoneNumber: PublicValidation.phoneNumber,
    validCode: PublicValidation.validCode,
    passWord: PublicValidation.passWord,
    conFirmPassWord: PublicValidation.conFirmPassWord,
  };
  from: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, private updatepasswordServe: UpdatepasswordServe, public formBuilder: FormBuilder, public menuCtrl: MenuController, public publicFunction: PublicFunction) {
    this.from = formBuilder.group({
      phoneNumber: ['', [Validators.required, forRegExpValidator(RegularExpression.matchPhone, 'phoneNumber'), Validators.maxLength(11)]],
      validCode: ['', [Validators.required]],
      passWord: ['', [Validators.required, Validators.minLength(6)]],
      conFirmPassWord: ['', [this.publicFunction.match('passWord'), Validators.required]]
    })
    allFrom(this.from, this.formErrors, this.validationMessages);
  }

  ionViewCanEnter(): boolean {
    return this.publicFunction.checkUserIsLogin();
  }

  /**
   * 验证码的参数
   */
  verifyCode: verificationCodeEntity = {
    verifyCodeTips: "获取验证码",
    countDown: 120,
    disable: true,
  }

  /**
   * 获取验证码组件中的的点击事件
   */
  onVoted(data: any) {
    let code: updatePasswordCodeEntity = {
      Mobile: this.from.get('phoneNumber').value,
    }
    this.updatepasswordServe.getCode(code).subscribe(data => {
      if (data.StateCode == 0) {
        this.publicFunction.newToast(data.Message);
      } else {
        this.publicFunction.newToast(data.Message);
      }
    });
  }

  /**
   * 修改密码提交方法
   */
  resetPassword() {
    if (this.from.valid) {
      let updatePasswordEntity: updatePasswordEntity = {
        Mobile: this.from.get('phoneNumber').value,
        Code: this.from.get('validCode').value,
        Password: this.from.get('passWord').value,
        ConfirmPassword: this.from.get('conFirmPassWord').value,
      }
      this.updatepasswordServe.resetPassword(updatePasswordEntity).subscribe(data => {
        data.StateCode == 1 ? this.publicFunction.newToast('修改密码成功') : this.publicFunction.newToast('修改密码失败')
      }, error => this.formErrors = <any>error);
    }
  }
}
