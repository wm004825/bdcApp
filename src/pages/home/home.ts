import { UnsubmittedPage } from './../upload/business/unsubmitted/unsubmitted';
import { MylistPage } from './../upload/business/mylist/mylist';
import { OnlinehandlingPage } from './../upload/handle/onlinehandling/onlinehandling';
import { GuidePage } from './../upload/newdetails/guide/guide';
import { RelevantdepartmentsPage } from './../upload/newdetails/relevantdepartments/relevantdepartments';
import { QueryanonymousationPage } from '../upload/queryInfo/queryanonymousation/queryanonymousation';
import { QueryotherinformationPage } from '../upload/queryInfo/queryotherinformation/queryotherinformation';
import { PublicServe } from './../../public/public.serve';
import { PublicFunction } from './../../public/public.function';
import { Component } from '@angular/core';
import { NavController, Tabs } from 'ionic-angular';
import { QueryinformationPage } from '../upload/queryInfo/queryinformation/queryinformation';
import { QuerycheckationPage } from '../upload/queryInfo/querycheckation/querycheckation';
/**
 * 首页
 */
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tabs: Tabs;
  constructor(public navCtrl: NavController, private publicFunction: PublicFunction, private publicServe: PublicServe) {
    this.tabs = navCtrl.parent;
  }

  /**
   * 新闻list
   */
  NewList: any;

  /**
   * 页面头部nav
   */
  navList = [
    { ionfont: 'icon-zhongduanzaixianguanli', txt: '在线办理' },
    { ionfont: 'icon-wangshangyushen-', txt: '网上预审' },
    { ionfont: 'icon-chaxuntiaojian', txt: '业务查询' },
    { ionfont: 'icon-chaxuntiaojian', txt: '我的业务' },
    { ionfont: 'icon-gongzhonghaoshouquan', txt: '我的授权' },
    { ionfont: 'icon-chadangfuwu-', txt: '查档服务' },
  ];

  /**
   * 页面头部的引导
   */
  boxList = [
    { title: '业务指南', txt: '点击查看相关指南', img: 'assets/imgs/zhinan.png' },
    { title: '楼盘查询', txt: '点击查询相关楼盘', img: 'assets/imgs/loupan.png' },
    { title: '相关部门', txt: '点击查看部门简介', img: 'assets/imgs/bumen.png' },
    { title: '网站链接', txt: '点击查看相关网站', img: 'assets/imgs/wangzhan.png' }
  ]


  ngOnInit() {
    this.publicServe.getNewsList().subscribe(data => {
      this.NewList = data;
    });
  }

  /**
   * 点击导航页
   * @param index 从页面返回的index
   */
  clickNav(index) {
    switch (index) {
      case 0:
        this.navCtrl.push(OnlinehandlingPage, { title: this.navList[index].txt });
        break;
      case 1:
        this.navCtrl.push(OnlinehandlingPage, { title: this.navList[index].txt });
        break;
      case 2:

        break;
      case 3:
        this.navCtrl.push(MylistPage);
        break;
      case 4:

        break;
      case 5:
        this.publicFunction.createSheetButtons([{ text: '个人查档' }, { text: '机构查档' }, { text: '查验查档' }, { text: '匿名查档' }]).subscribe((data) => {

          switch (data) {
            case '个人查档':
              this.navCtrl.push(QueryinformationPage)
              break;
            case '机构查档':
              this.navCtrl.push(QueryotherinformationPage)
              break;
            case '查验查档':
              this.navCtrl.push(QuerycheckationPage)
              break;
            case '匿名查档':
              this.navCtrl.push(QueryanonymousationPage)
              break;
            default:
              break;
          }
        })
        break;

    }
  }

  clickBox(index) {
    switch (index) {
      case 0:
        this.navCtrl.push(GuidePage);
        break;
      case 1:

        break;
      case 2:
        this.navCtrl.push(RelevantdepartmentsPage)
        break;
      case 3:

        break;
    }
  }

  /**
   * 点击更多
   */
  goMore() {
    this.tabs.select(1);
  }

  goTest() {
    this.navCtrl.push(UnsubmittedPage);
  }

  // defaultImage = 'https://www.placecage.com/1000/1000';
  img = 'https://bdcapppractice.nngeo.com/image/gd1.jpg';
  offset = 100;

}
