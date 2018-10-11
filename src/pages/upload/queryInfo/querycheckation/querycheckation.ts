import { pageEntity } from './../../../../public/public.entity';
import { QueryCheckationServe } from './querycheckation.serve';
import { CurrencyString } from './../currency/query.variable';
import { PublicFunction } from './../../../../public/public.function';
import { UserInfo } from './../../../../infrastructure/user.info';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { QueryhistorPage } from '../queryhistor/queryhistor';

/**
 * 查验查档
 */

@IonicPage()
@Component({
  selector: 'page-querycheckation',
  templateUrl: 'querycheckation.html',
})
export class QuerycheckationPage {

  constructor(public navCtrl: NavController, private queryCheckationServe: QueryCheckationServe, public navParams: NavParams, public modalCtrl: ModalController, private userInfo: UserInfo, private publicFunction: PublicFunction) {
  }

  initString = {
    cdjlName: CurrencyString.cdjlName,
    cycdName:CurrencyString.cycdName,
  }

  user = {
    personName: this.userInfo.GetPersonName(),
    personNo: this.userInfo.GetPersonNo(),
    userName: this.userInfo.GetUserName(),
  };

  ionViewCanEnter(): boolean {
    return this.publicFunction.checkUserIsLogin();
  }

  /**
   * 查询记录
   */
  queryHistory() {
    /**
     * 跳转到记录
     * @param index 0是个人查档  1是机构查档  
     * @param tabsName 当前的tab焦点
     * @param tabsArray 当前的tabs 名字数组 用来迭代 
     */
    let profileModal = this.modalCtrl.create(QueryhistorPage, { index: 2, tabsName: '查验查档', tabsArray: [{ name: '查验查档' }] });
    profileModal.present();
  }

  /**
   * 列表
   */
  checkItem: any;
  
  ngOnInit() {
    let pageEntity: pageEntity = {
      page: 1,

      //只拿一条
      pagesize: 1,
    }
    this.queryCheckationServe.getCodePage(pageEntity).subscribe(data => {
      this.checkItem = JSON.parse(data.Data['items']); 
    })
  }

  openQuery() { 
  }

}
