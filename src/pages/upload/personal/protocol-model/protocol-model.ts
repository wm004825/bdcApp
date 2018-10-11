import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * 注册协议
 */
@IonicPage()
@Component({
  selector: 'page-protocol-model',
  templateUrl: 'protocol-model.html',
})
export class ProtocolModelPage {
  myParam: string;

  modelNumber: any = {
    name: "同意协议",
    countdown: 10,
    disable: true
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, params: NavParams) {
    this.modelSettime();
  }

  /**
   * 关闭拟态窗
   */
  dismiss(type:boolean) { 
    this.viewCtrl.dismiss(type);
  }


  /**
 * 同意协议倒计时
 */
  modelSettime() {
    if (this.modelNumber.countdown == 0) {
      this.modelNumber.name = "同意协议";
      this.modelNumber.disable = true;
      return;
    } else {
      this.modelNumber.countdown--;
      this.modelNumber.name = "同意协议（" + this.modelNumber.countdown + ")";
      this.modelNumber.disable = false
    }
    setTimeout(() => {
      this.modelSettime();
    }, 1000);
  }

}
