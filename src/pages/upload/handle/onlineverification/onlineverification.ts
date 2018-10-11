import { OnlinepretrialdetailsPage } from './../onlinepretrialdetails/onlinepretrialdetails';
import { OnlineverificationServe } from './onlineverification.serve';
import { d4Type, commonType, b3Type, b5Type, b2Type, d1Type } from './onlineverification.entity';
import { PublicFunction } from './../../../../public/public.function';
import { handleEntity, handleData, } from './../currency/handle.variable';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * 在线办理和网上预审的信息验证
 */
@IonicPage()
@Component({
  selector: 'page-onlineverification',
  templateUrl: 'onlineverification.html',
})
export class OnlineverificationPage {

  handleEntity: handleEntity = {
    name: handleData.current.name,
    title: handleData.current.title,
    data: '',
  }

  /**
   * 传给下一级的typecode
   */
  typecode:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private OnlineverificationServe: OnlineverificationServe, private publicFunction: PublicFunction) {
    this.handleEntity.projectName = navParams.get('projectName');
  }

  ngOnInit() {
    switch (this.handleEntity.projectName) {
      case '预购商品房抵押权首次预告登记':
        this.setSelect('d4-1', d4Type);
        break;
      case '预购商品房预告登记':
        this.setSelect('b3', b3Type);
        break;
      case '抵押权注销登记（抵押权人为金融机构）':
        this.setSelect('b5', b5Type);
        break;
      case '新建商品房转移':
        this.setSelect('b2', b2Type);
        break;
      case '房屋交易在线登记':
        this.handleEntity.data = d1Type;
        this.handleEntity.data.typecode = 'a1ex';
        break;
      case '新建商品房、保障性住房首次登记':
        this.setSelect('s1', b3Type, () => {
          this.handleEntity.data.typecode = 's1';
        });
        break;
      case '购买新建市场运作房、单位出售全额集资房、危旧房改住房改造的住房转移(网上申请)' || '市场运作房、集资建房、危旧房改住房改造的住房预告登记(网上申请)' || '市场运作房、集资建房、危旧房改住房改造的住房抵押权预告登记(网上申请)':
        this.handleEntity.data = b2Type;
        break;

      default:
        this.handleEntity.data = d1Type;
        break;
    }
  }

  /**
   * 统一设置值
   * @param typecode 请求参数
   * @param commonType 调用的参数
   * @param then 回调
   */
  setSelect(typecode: string, type: commonType, then?: Function) {
    this.getSelect(typecode, (data) => {
      type.company = { index: 0, list: data, value: '', }
      this.handleEntity.data = type;
      if (then) then();
    })
  }

  /**
   * 获取备案企业
   * @param typecode 请求参数 
   * @param then 回调
   */
  getSelect(typecode: string, then?: Function) {
    this.typecode = typecode;
    this.OnlineverificationServe.getCompanyNames({ typecode: typecode }).subscribe(data => {
      if (data.StateCode == 1) {
        if (then) then(data.Data);
      } else {
        this.publicFunction.newToast('获取不到备案企业');
      }
      
    })
  }


  onVoted() {

  }

  /**
   * 跳转信息填写页面 
   * @param data 数据
   * @param company 当前的备案企业
   */
  goDetails() { 
    this.OnlineverificationServe.checkhouseinfo({
      houseno: this.handleEntity.data.houseno,
      houseowner: this.handleEntity.data.houseowner,
      typecode: this.handleEntity.data.typecode,
      companyId: this.handleEntity.data.companyId
    }).subscribe(data => {
      if (data.StateCode == 1) {
        if (data.Data.ErroMessage !== null) {
          this.publicFunction.newToast(data.Data.ErroMessage);
        } else { 
          this.navCtrl.push(OnlinepretrialdetailsPage,  { 'projectName': this.handleEntity.projectName, 'data': data.Data, 'company': this.handleEntity.data.company.list[this.handleEntity.data.company.index],'typecode':this.typecode });
        }
      }
    })
  }
}
