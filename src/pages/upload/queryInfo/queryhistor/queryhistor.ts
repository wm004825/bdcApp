import { QuerydetailsPage } from './../querydetails/querydetails';
import { PublicFunction } from './../../../../public/public.function';
import { queryhistorList } from './queryhistor.entity';
import { QueryhistorServe } from './queryhistor.serve';
import { CurrencyString } from './../currency/query.variable';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * 查档记录页面
 * 包含个人查档、机构查档、查验查档、匿名查档的记录
 */

@IonicPage()
@Component({
  selector: 'page-queryhistor',
  templateUrl: 'queryhistor.html',
})
export class QueryhistorPage {
  initString = {
    index: 0,
    pet: '',
    personNo: '',
    headerTab: [],
    cdjlName: CurrencyString.cdjlName,
    gkdcxName: CurrencyString.gkdcxName,
    mxdcxName: CurrencyString.mxdcxName,
    grdcxName: CurrencyString.grdcxName,
    jtdcxName: CurrencyString.jtdcxName,
    cycdName: CurrencyString.cycdName,
  }

  listA: queryhistorList = {
    url: '',
    historyType: false,
    list: [],
    downData: '',
    downType: true,
    pageEntity: {
      page: 1,
      pagesize: 10,
    },
    name: 'listA',
  }

  listB: queryhistorList = {
    url: '',
    historyType: false,
    list: [],
    downData: '',
    downType: true,
    pageEntity: {
      page: 1,
      pagesize: 10,
    },
    name: 'listB',
  }

  /**
   * 第三变量方便调用对应的List
   */
  newList: queryhistorList = this.listA;

  constructor(public navCtrl: NavController,public modalCtrl: ModalController,public navParams: NavParams, private queryhistorServe: QueryhistorServe, private publicFunction: PublicFunction) {
    /**
     * @param index 0是个人查档  1是机构查档  3是匿名查档
     * @param tabsName 当前的tab焦点
     * @param tabsArray 当前的tabs 名字数组 用来迭代 
     * @param no 身份证号
     */
    this.initString.pet = navParams.get('tabsName');
    this.initString.index = navParams.get('index');
    this.initString.headerTab = navParams.get('tabsArray');
    this.initString.personNo = navParams.get('personNo');
  }

  ngOnInit() {
    this.init();
  }

  /**
   * 初始化请求参数和调用获取数据的方法
   * @param then 请求完回调
   */
  init(then?: Function) {
    if (!this.newList.downType) {
      this.newList.downType = true;
      this.newList.downData.enable(true)
    }
    switch (this.initString.index) {
      //个人档查询
      case 0:
        /** 判断是个人档还是公开档 */
        if (this.initString.pet == CurrencyString.gkdcxName) this.resettingList(this.listA, then);
        if (this.initString.pet == CurrencyString.mxdcxName) this.resettingList(this.listB, then);
        break;
      //机构档查询  
      case 1:
        /** 判断是个人档还是公开档 */
        if (this.initString.pet == CurrencyString.gkdcxName) this.resettingList(this.listA, then);
        if (this.initString.pet == CurrencyString.grdcxName) this.resettingList(this.listB, then);
        break;
      //查验查档  
      case 2:
        this.resettingList(this.listA, then);
        break;
      //匿名查档  
      case 3:
        /** 判断是个人档还是家庭档 */
        if (this.initString.pet == CurrencyString.grdcxName) this.resettingList(this.listA, then);
        if (this.initString.pet == CurrencyString.jtdcxName) this.resettingList(this.listB, then);
        break;
    }
  }

  /**
   * 重置列表。获取数据
   * @param list 列表对象
   * @param then 请求完回调
   */
  resettingList(list: queryhistorList, then?: Function) {
    list.list = [];
    list.pageEntity.page = 1;
    this.initList(list, then);
  }


  /**
   * 获取数据
   * @param list 列表对象
   * @param then 请求完回调
   */
  initList(list: queryhistorList, then?: Function) {

    switch (this.initString.index) {
      //个人档查询
      case 0:
        list.pageEntity.isOrganization = false;
        list.url = list.name.includes('listA') == true ? this.queryhistorServe.getOpenArchivalList(list.pageEntity) : this.queryhistorServe.getPersonArchivalList(list.pageEntity)
        break;
      //机构档查询  
      case 1:
        list.pageEntity.isOrganization = true; 
        list.url = list.name.includes('listA') == true ? this.queryhistorServe.getOpenArchivalList(list.pageEntity) : this.queryhistorServe.getPersonOrganization(list.pageEntity)
        break;
      //查验查档  
      case 2:
        list.url = this.queryhistorServe.getCodePage(list.pageEntity);
        break;
      //匿名查档  
      case 3:
        list.pageEntity.personNo = this.initString.personNo;
        list.url = list.name.includes('listA') == true ? this.queryhistorServe.getPersonsAnonymous(list.pageEntity) : this.queryhistorServe.getFamilysAnonymous(list.pageEntity)
        break;
    }

    list.url.subscribe(data => {
      if (data.StateCode == 1) {
        /**
         * 查验查档返回的结果跟其他的不一样 
         */
        if (this.initString.index == 2) {
          JSON.parse(data.Data['items']).forEach(value => {
            list.list.push(value);
          });
        } else {
          data.Data.forEach(value => {
            list.list.push(value);
          });
        }
        list.historyType = list.list.length == 0 ? true : false;
        if (then) then(data);
      } else {
        this.publicFunction.newToast(data.Message);
      }
    });
  }

  /**
   * 点击头部切换
   * 判断是否未点击
   */
  petChanged() {
    if (this.listA.list.length == 0) this.initList(this.listA);
    if (this.listB.list.length == 0) this.initList(this.listB);
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
    switch (this.initString.index) {
      //个人档查询
      case 0:
        /** 判断是个人档还是公开档 */
        if (this.initString.pet == CurrencyString.mxdcxName) this.newList = this.listB;
        break;
      //机构档查询  
      case 1:
        /** 判断是个人档还是公开档 */
        if (this.initString.pet == CurrencyString.grdcxName) this.newList = this.listB;
        break;
      //查验查档  
      case 2:
        break;
      //匿名查档  
      case 3:
        /** 判断是个人档还是家庭档 */
        if (this.initString.pet == CurrencyString.jtdcxName) this.newList = this.listB;
        break;
    }

    this.newList.pageEntity.page++;
    this.initList(this.newList, (data) => {
      if (data.Data.length < 10) {
        refresher.enable(false);
        this.newList.downData = refresher;
        this.newList.downType = false;
        this.publicFunction.newToast("没有更多的数据");
        return false;
      }
      refresher.complete();
    })
  }

  goBack() {
    this.navCtrl.pop();
  }

  /**
   * 跳转查档详情
   * @param IdentityCode 传入详情页面的参数 
   */
  goDetails(IdentityCode:string) {  
    let profileModal = this.modalCtrl.create(QuerydetailsPage, { IdentityCode: IdentityCode, });
    profileModal.present();
  }
}
