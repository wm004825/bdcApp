import { OnlineverificationPage } from './../onlineverification/onlineverification'; 
import { handleData, handleEntity } from './../currency/handle.variable';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * 在线办理和网上预审的2级列表
 */

@IonicPage()
@Component({
  selector: 'page-onlinepretriallist',
  templateUrl: 'onlinepretriallist.html',
})
export class OnlinepretriallistPage {

  handleEntity: handleEntity = {
    name: handleData.current.name,
    title: handleData.current.title,
    data: handleData.current.List,
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
  }

  ngOnInit() {

  }

  /**
   * 跳转验证页面
   * @param projectName 办理业务的名字
   */
  goDetails(projectName: string) {
    this.navCtrl.push(OnlineverificationPage, { projectName: projectName });
  }

}
