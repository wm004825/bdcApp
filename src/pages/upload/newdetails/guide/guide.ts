import { GuidelistPage } from './../guidelist/guidelist';
import { PublicFunction } from './../../../../public/public.function';
import { GuideServe } from './guide.serve';
import { newData } from './../currency/newdetails.variable';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * 业务指南
 */

@IonicPage()
@Component({
  selector: 'page-guide',
  templateUrl: 'guide.html',
})
export class GuidePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private guideServe: GuideServe, private publicFunction: PublicFunction) {
  }

  guide: any;

  ngOnInit() {
    if (newData.guide.length == 0) {
      this.init();
      return false;
    }
    this.guide = newData.guide

  }


  init(then?: Function) {
    newData.guide = [];
    this.guideServe.getGuide().subscribe(data => {
      this.guide = data.GuideList;
      this.guide.forEach(value => {
        newData.guide.push(value);
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
      this.publicFunction.newToast('刷新成功', 3000, 'bottom');
    });
  }

  /**
   * 跳转详情
   * @param id 从页面获取的值
   */
  goDetails(id: string) { 
    this.navCtrl.push(GuidelistPage, { id: id });
  }

}
