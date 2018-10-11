import { PublicFunction } from './../../public/public.function';
import { PublicServe } from './../../public/public.serve';
import { pageEntity, dropDown } from './../../public/public.entity';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular'; 
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, private publicServe: PublicServe,private publicFunction:PublicFunction) {

  }

  ngOnInit() {
    this.init();
  }

  /**
   * 新闻列表
   */
  newList: any;

  /**
   * 获取的page
   */
  page: pageEntity = {
    page: 1,
    pagesize: 10,
  }

  /**
   * 下拉的变量
   */
  dropDown: dropDown = {
    downData: '',
    downType: true,
  }


  /**
   * 初始化相关资讯页面 
   * @param page 数量
   */
  init(then?: Function) {
    if (!this.dropDown.downType) {
      this.dropDown.downType = true;
      this.dropDown.downData.enable(true)
    }
    this.page.page = 1;
    this.publicServe.getNewsList(this.page).subscribe(data => {
      this.newList = data;
      if (then) { then() }
    })
  }

  /**
   * 上拉刷新页面
   * @param refresher 据页面传回来的event
   */
  doRefresh(refresher: any) {
    this.init(function () {
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
    this.page.page++; 
    this.publicServe.getNewsList(this.page).subscribe(data => {
      data.forEach(item => {
        this.newList.push(item);
      });
      if (data.length < 10) {
        refresher.enable(false); 
        this.publicFunction.newToast("没有更多的数据");
        return false;
      }
      refresher.complete();
    })
  }
}
