import { UpdatepasswordPage } from './../updatepassword/updatepassword';
import { AppService } from './../../../../infrastructure/app.serve';
import { RegisterPage } from './../register/register';
import { UserInfo } from './../../../../infrastructure/user.info';
import { LoginServe } from './login.serve';
import { PublicValidation } from './../../../../public/public.validation';
import { RegularExpression } from './../../../../infrastructure/regular-expression';
import { PublicFunction } from './../../../../public/public.function';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { forRegExpValidator, allFrom } from '../../../../public/Independent.function';
/**
 * 登录页面
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {
  tabs: Tabs;
  loginForm: FormGroup;

  /**
   * 表单错误信息
   */
  formErrors = {
    userName: '',
    passWord: ''
  };

  /**
   * 错误信息模版
   */
  validationMessages = {
    userName: PublicValidation.userName,
    passWord: PublicValidation.passWord,
  };

  constructor(public navCtrl: NavController, public appService: AppService, public navParams: NavParams, private userInfo: UserInfo, private loginServe: LoginServe, public fb: FormBuilder, public publicFunction: PublicFunction) {
    this.tabs = navCtrl.parent;
    this.createForm();
  }

  goBack() {
    this.tabs.select(0);
  }

  createForm() {
    this.loginForm = this.fb.group({
      userName: ['18260951741', [Validators.required, forRegExpValidator(RegularExpression.matchPhone, 'userName')]],
      passWord: ['123456', [Validators.required, Validators.minLength(6)]],
    });
    console.log(this.loginForm);
    allFrom(this.loginForm, this.formErrors, this.validationMessages);
  }

  /**
   * 登录提交方法
   */
  onLogin() {
    if (this.loginForm.valid) {
      this.loginServe.login(this.loginForm.value).subscribe(data => {
        console.log(data);
        this.userInfo.SetExpires(data['.expires']);
        this.userInfo.SetPersonName(data['personName']);
        this.userInfo.SetPersonNo(data['personNo']);
        this.userInfo.SetToken(data['access_token']);
        this.userInfo.SetUserName(data['userName']);
        this.userInfo.SaveCompanyAccountInfo(data['isCompanyAccount']);
        this.userInfo.SaveHumanReadName(data['IsHumanReadName']);
        this.userInfo.SaveReadName(data['IsRealName']);
        this.appService.sub.next('goContact');
        this.navCtrl.popToRoot()
      }, error => this.publicFunction.newToast(error.error.error_description));
    }
  }

  onRegister() {
    this.navCtrl.push(RegisterPage);
  }

  goUpdatePassword() {
    this.navCtrl.push(UpdatepasswordPage);
  }
}
