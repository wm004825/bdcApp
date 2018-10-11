import { ProtocolModelPage } from './../protocol-model/protocol-model';
import { PublicFunction } from './../../../../public/public.function';
import { verificationCodeEntity } from './../../../../public/public.entity';
import { codeEntity } from './register.entity';
import { RegisterServe } from './register.serve';
import { PublicValidation } from './../../../../public/public.validation';
import { RegularExpression } from './../../../../infrastructure/regular-expression';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, MenuController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { allFrom, forRegExpValidator } from '../../../../public/Independent.function';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})

export class RegisterPage {

  /**
   * 表单错误信息
   */
  formErrors = {
    userName: '',
    personNo: '',
    phoneNumber: '',
    isCheck: '',
    validCode: '',
    passWord: '',
    conFirmPassWord: '',
  };

  /**
   * 表单错误信息模版
   */
  validationMessages = {
    userName: PublicValidation.userName,
    personNo: PublicValidation.personNo,
    phoneNumber: PublicValidation.phoneNumber,
    isCheck: PublicValidation.isCheck,
    validCode: PublicValidation.validCode,
    passWord: PublicValidation.passWord,
    conFirmPassWord: PublicValidation.conFirmPassWord,
  };

  /**
   * 验证码的参数
   */
  verifyCode: verificationCodeEntity = {
    verifyCodeTips: "获取验证码",
    countDown: 60,
    disable: true, 
  }

  from: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public menuCtrl: MenuController, public modalCtrl: ModalController, private registerServe: RegisterServe, private publicFunction: PublicFunction) {
    this.from = formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(12)]],
      personNo: ['', [Validators.required, forRegExpValidator(RegularExpression.matchIDCard, 'personNo')]],
      phoneNumber: ['18260951741', [Validators.required, forRegExpValidator(RegularExpression.matchPhone, 'phoneNumber'), Validators.maxLength(11)]],
      isCheck: [false, Validators.requiredTrue],
      validCode: ['', [Validators.required]],
      passWord: ['', [Validators.required, Validators.minLength(6)]],
      conFirmPassWord: ['', [Validators.required, this.publicFunction.match('passWord'),]],
    });
    allFrom(this.from, this.formErrors, this.validationMessages); 
  }
  
  ionViewCanEnter(): boolean {  
    return this.publicFunction.checkUserIsLogin();
  }

  /**
   * 返回登录页
   */
  gotoLogin() {
    this.navCtrl.pop();
  }

  /**
   * 获取验证码组件中的的点击事件
   */
  onVoted(data: any) {
    let codeEntity: codeEntity = {
      phone: this.from.get('phoneNumber').value,
      isRegister: true
    };
    this.registerServe.getCode(codeEntity).subscribe(data => {
      if (data.StateCode == 0) {
        this.publicFunction.newToast(data.Message);
      } else {
        this.publicFunction.newToast(data.Message);
      }
      
    });
  }



  /**
   * 同意协议
   */
  getProtocol() { 
    let profileModal = this.modalCtrl.create(ProtocolModelPage);
    profileModal.onDidDismiss(data => {
      this.from.get('isCheck').setValue(data);
    });
    profileModal.present();
  }

  /**
   * 注册提交方法
   */
  onRegister() {
    if (this.from.valid) {
      this.registerServe.register(this.from.value).subscribe(data => {
        if(data.StateCode == 1){
        }else{
        }
      }, error => this.formErrors = <any>error);
    }
  }
}
