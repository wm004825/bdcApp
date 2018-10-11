import { OnlinepretriallistPage } from './../onlinepretriallist/onlinepretriallist';
import { HandleFunction } from './../currency/handle.function';
import { handleData } from './../currency/handle.variable';
import { PublicFunction } from './../../../../public/public.function';
import { onlinehandlingEntity } from './onlinehandling.entity';
import { HandleServe } from './../currency/handle.serve';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * 在线办理和网上预审
 */

@IonicPage()
@Component({
  selector: 'page-onlinehandling',
  templateUrl: 'onlinehandling.html',
})
export class OnlinehandlingPage {
  onlinehandlingEntity: onlinehandlingEntity = {
    title: '',
    data: '',
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, private handleServe: HandleServe, private publicFunction: PublicFunction, private handleFunction: HandleFunction) {
    this.onlinehandlingEntity.title = this.navParams.get('title')
  }

  ionViewCanEnter(): boolean {
    return this.publicFunction.checkUserIsLogin();
  }


  ngOnInit() {
    if (handleData.handle.length == 0) {
      this.init();
      return false;
    }

    /**
    * 当前列表的内容
    */
    handleData.current.List = this.onlinehandlingEntity.title.includes('在线办理') ? handleData.onlinehandling : handleData.onlinepretrial;
    handleData.current.typeList = this.onlinehandlingEntity.title.includes('在线办理') ? handleData.onlinehandlingTypeList : handleData.onlinepretrialTypeList;
    this.onlinehandlingEntity.data = handleData.current.typeList;
  }


  init(then?: Function) { 
    handleData.handle = [];
    handleData.onlinehandling = [];
    handleData.onlinepretrial = [];
    this.handleServe.getProjectTypeList().subscribe(data => {
      this.onlinehandlingEntity.data = data.Data;
      this.onlinehandlingEntity.data.forEach(value => {
        handleData.handle.push(value);

        /**
         * 拆分列表。有网上预审和在线办理2个列表
         */
        if (value.IsAutoProject) {
          handleData.onlinehandling.push(value);
        } else {
          handleData.onlinepretrial.push(value);
        }
      });

      /**
       * 拆分列表的一级名字
       */
      handleData.onlinehandlingTypeList = this.handleFunction.screenList(handleData.onlinehandling);
      handleData.onlinepretrialTypeList = this.handleFunction.screenList(handleData.onlinepretrial);

      /**
       * 当前列表的内容
       */
      handleData.current.List = this.onlinehandlingEntity.title.includes('在线办理') ? handleData.onlinehandling : handleData.onlinepretrial;
      handleData.current.typeList = this.onlinehandlingEntity.title.includes('在线办理') ? handleData.onlinehandlingTypeList : handleData.onlinepretrialTypeList;
      this.onlinehandlingEntity.data = handleData.current.typeList;
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
   * @param name 从页面获取的值
   */
  goDetails(name: string, title: string) {
    handleData.current.name = name;
    handleData.current.title = title;
    this.navCtrl.push(OnlinepretriallistPage);
  }
}
