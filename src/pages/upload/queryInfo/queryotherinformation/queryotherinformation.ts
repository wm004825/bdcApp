import { QueryhistorPage } from './../queryhistor/queryhistor';
import { selectData } from './../../../../public/public.entity';
import { CompaniesEntity, personEntity } from './queryotherinformation.entity';
import { PublicFunction } from './../../../../public/public.function';
import { QueryForm } from '../currency/query.form';
import { CurrencyString, QueryString, QueryotherinformationData } from './../currency/query.variable';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController, AlertController } from 'ionic-angular';
import { FormGroup } from "@angular/forms";
import { QueryotherinformationServe } from './queryotherinformation.serve';

/**
 * 机构查档页面
 */
@IonicPage()
@Component({
  selector: 'page-queryotherinformation',
  templateUrl: 'queryotherinformation.html',
})
export class QueryotherinformationPage {
  /**
   * 个人档的form
   */
  form: FormGroup;

  /**
   * 个人查档的备案企业
   */
  personalSelect: selectData;

  /**
   * 机构查档
   */
  publicSelect: selectData;

  /**
   * 公开档查询的数据
   */
  queryotherinformationData = QueryotherinformationData;


  /**
   * 请求参数
   */
  personEntity: personEntity = {};

  /**
   * 公开档是否允许提交
   * 不用在2个页面写数据校验。在组件写即可
   */
  query = {
    queryIsSubmit:false
  }


  formErrors = {};
  validationMessages = {};


  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public alertCtrl: AlertController, private queryForm: QueryForm, public publicFunction: PublicFunction, private queryotherinformationServe: QueryotherinformationServe) {
    this.form = this.queryForm.createInfoForm(this.form, 1);
    this.formErrors = this.queryForm.formErrors;
    this.validationMessages = this.queryForm.validationMessages;
  }

  ionViewCanEnter(): boolean {
    return this.publicFunction.checkUserIsLogin();
  }

  ngOnInit() {
    let index = this.initString.pet == CurrencyString.grdcxName ? 0 : 2;
    this.getCompanies(index, data => {
      if (index == 0) {
        this.personalSelect = { index: 0, list: data.Data, value: '' }
      } else {
        this.publicSelect = { index: 0, list: data.Data, value: '' }
      }
    });
  }

  /**
   * 机构查询  公开挡备案企业 
   * @param index 0:名下档  1:查验查档  2:公开档
   * @param then 回调参数
   */
  getCompanies(index: number, then: Function) {
    let CompaniesEntity: CompaniesEntity = { queryIndex: index };
    this.queryotherinformationServe.getCompanies(CompaniesEntity).subscribe(data => {
      if (data.StateCode == 1) {
        then(data);
      } else {
        this.publicFunction.newToast(data.Message)
      }
    })
  }

  /**
   * 初始化字符串
   */
  initString = {
    /**
     * 个人查档 tabs 的name
     */
    pet: QueryString.queryOtherInformationPet,

    tabA: [
      { name: CurrencyString.gkdcxName },
      { name: CurrencyString.grdcxName }
    ],
    gkdcxName: CurrencyString.gkdcxName,
    grdcxName: CurrencyString.grdcxName,
    bdcqzName: CurrencyString.bdcqzName,
    yfqzName: CurrencyString.yfqzName,
    qtName: CurrencyString.qtName,

    cxgkdName: CurrencyString.cxgkdName,
    cxbrName: CurrencyString.cxbrName,
    cxjtcyName: CurrencyString.cxjtcyName,
    cdjlName: CurrencyString.cdjlName,
  }

  /**
  * 点击头部切换
  */
  petChanged() {
    QueryString.queryOtherInformationPet = this.initString.pet;
    if (!this.personalSelect) {
      this.getCompanies(0, data => {
        this.personalSelect = { index: 0, list: data.Data, value: '' }
      });
    }

    if (!this.publicSelect) {
      this.getCompanies(2, data => {
        this.publicSelect = { index: 0, list: data.Data, value: '' }
      });
    }
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
    let profileModal = this.modalCtrl.create(QueryhistorPage, { index: 1, tabsName: this.initString.pet, tabsArray: this.initString.tabA, });
    profileModal.present();
  }

  /**
   * 查询公开档
   */
  openQuery() {
    let list = this.queryotherinformationData.list[this.queryotherinformationData.index];
    this.personEntity.userName = this.publicSelect.value;
    this.personEntity.companyId = this.publicSelect.list[this.publicSelect.index].Key;
    this.personEntity.PropertyRightNum = list.txt;  
    if (this.query.queryIsSubmit) {
      this.queryotherinformationServe.personArchivalQuery(this.personEntity).subscribe(data => {
        if (data.StateCode == 1) {
          this.publicFunction.newToast(data.Message)
        } else {
          this.publicFunction.newToast(data.Message)
        }
      })
    } else {
      this.publicFunction.newToast('您输入的权证信息有误，请重新输入！')
    }  
  }

  /**
   * 查询个人档
   */
  goQuery() {
    if (this.form.valid) {
      let item = this.form.controls['data'].value[0];
      this.personEntity.userName = item.userName;
      this.personEntity.personNo = item.personNo;
      this.personEntity.companyId = this.personalSelect.list[this.personalSelect.index].Key;
      if (item.arr.length > 0) {
        for (let i = 0; i < item.arr.length; i++) {
          this.personEntity.userName += ',' + item.arr[i].name;
          this.personEntity.personNo += ',' + item.personNo;
        }
      }
      this.queryotherinformationServe.personArchivalQuery(this.personEntity).subscribe(data => {
        if (data.StateCode == 1) {
          this.publicFunction.newToast(data.Message)
        } else {
          this.publicFunction.newToast(data.Message)
        }
      })
    }
  }
}
