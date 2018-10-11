import { UnsubmittedPage } from './../unsubmitted/unsubmitted';
import { mylistEntity } from './mylist.entity';
import { PublicFunction } from './../../../../public/public.function';
import { pageEntity, dropDown } from './../../../../public/public.entity';
import { MyListServe } from './mylist.serve';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * 我的列表
 */

@IonicPage()
@Component({
  selector: 'page-mylist',
  templateUrl: 'mylist.html',
})
export class MylistPage {

  /**
   * 分页
   */
  pageEntity: pageEntity = {
    page: 1,
    pagesize: 10,
  }

  /**
   * 列表
   */
  mylist: mylistEntity = {};

  /**
   * 下拉的变量
   */
  dropDown: dropDown = {
    downData: '',
    downType: true,
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private myListServe: MyListServe, private publicFunction: PublicFunction) {
  }

  ngOnInit() {
    this.init();
  }

  ionViewCanEnter(): boolean {
    return this.publicFunction.checkUserIsLogin();
  }

  /**
   * 初始化我的业务
   */
  init(then?: Function) {
    if (!this.dropDown.downType) {
      this.dropDown.downType = true;
      this.dropDown.downData.enable(true)
    }
    this.pageEntity.page = 1;
    this.myListServe.getMyList(this.pageEntity).subscribe(data => {
      this.mylist = data.Data;
      if (then) then();
      this.mylist.Items.forEach(item => {
        console.log(item.Children);
      })
    })
  }

  /**
  * 上拉刷新页面
  * @param refresher 据页面传回来的event
  */
  doRefresh(refresher: any) {
    this.init(() => {
      refresher.complete();
    });
  }

  /**
   * 下滑加载数据
   *  @param refresher 根据页面传回来的event
   */
  doInfinite(refresher: any) {
    this.dropDown.downType = false;
    this.dropDown.downData = refresher;
    this.pageEntity.page++;
    this.myListServe.getMyList(this.pageEntity).subscribe(data => {
      data.Data.Items.forEach(item => {
        this.mylist.Items.push(item)
      });
      if (data.Data.Items.length < 10) {
        refresher.enable(false);
        this.publicFunction.newToast("没有更多的数据");
        return false;
      }
      refresher.complete();
    })
  }

  /**
   * 其他业务
   */
  other() {
    this.publicFunction.createSheetButtons([{ text: '批量未提交业务' }, { text: '缴费列表' }, { text: '综合业务列表' }]).subscribe((data) => {
      switch (data) {
        case '批量未提交业务':
          this.navCtrl.push(UnsubmittedPage)
          break;
        default:
          break;
      }
    })
  }

}
