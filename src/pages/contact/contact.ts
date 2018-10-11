import { AppService } from './../../infrastructure/app.serve';
import { UpdatepasswordPage } from './../upload/personal/updatepassword/updatepassword';
import { UserInfo } from './../../infrastructure/user.info';
import { LoginPage } from './../upload/personal/login/login';
import { Component } from '@angular/core';
import { NavController, Tabs } from 'ionic-angular';
import { PublicFunction } from './../../public/public.function';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  tabs: Tabs;

  constructor(public navCtrl: NavController, public appService: AppService, private publicFunction: PublicFunction, private userInfo: UserInfo) {
    /**
    * 最底层导航控制器的parent就死Tabs
    */
    this.tabs = navCtrl.parent;
  }

  ionViewWillEnter() {
    return this.init();
  }

  init(): boolean {
    if (this.user.name == "") {
      this.user.name = this.userInfo.GetPersonName();
    }

    /**
     * 登陆成功后回调
     */
    this.appService.sub.subscribe(res => {
      this.user.name = this.userInfo.GetPersonName();
    })
    return this.publicFunction.checkUserIsLogin();
  }

  ionViewCanEnter(): boolean {
    return this.init();
  }


  /**
   * 用户信息
   */
  user = {
    photo: '',
    name: '',
    account: '',
  }

  goLogin() {
    this.navCtrl.push(LoginPage);
  }

  goUpdatePassword() {
    this.navCtrl.push(UpdatepasswordPage);
  }

  /**
   * 撤销登陆
   */
  exitLogin() {
    this.publicFunction.createSheetButtons([{ 'text': '退出登陆' }]).subscribe(data => {
      if (data === '退出登陆') {
        this.userInfo.SetExpires('');
        this.userInfo.SetPersonName('');
        this.userInfo.SetPersonNo('');
        this.userInfo.SetToken('');
        this.publicFunction.newToast('成功退出');
        this.tabs.select(0);
      }
    })
  }

}
