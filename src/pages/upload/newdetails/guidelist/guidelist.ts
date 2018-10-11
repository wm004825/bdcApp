import { GuidedetailsPage } from './../guidedetails/guidedetails';
import { GuidelistServe } from './guidelist.serve';
import { getGuideSonListEntity, guideSonList } from './guidelist.eneity';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * 业务指南列表
 */

@IonicPage()
@Component({
  selector: 'page-guidelist',
  templateUrl: 'guidelist.html',
})
export class GuidelistPage {

  getGuideSonListEntity: getGuideSonListEntity;
  guideSonList: guideSonList;

  constructor(public navCtrl: NavController, public navParams: NavParams, private guidelistServe: GuidelistServe) {
    this.getGuideSonListEntity={id:navParams.get('id')}  
  }

  ngOnInit() {
    this.guidelistServe.getGuideSonList(this.getGuideSonListEntity).subscribe(data => {
      this.guideSonList = data;
    })
  }


  /**
   * 跳转详情
   * @param id 从页面获取的值
   */
  goDetails(id: string) {
    this.navCtrl.push(GuidedetailsPage, { id: id });
  }
}
