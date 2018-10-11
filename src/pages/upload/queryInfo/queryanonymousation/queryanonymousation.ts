import { QueryhistorPage } from './../queryhistor/queryhistor';
import { QueryString, CurrencyString } from './../currency/query.variable';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup } from "@angular/forms";
import { ModalController } from 'ionic-angular';
import { QueryForm } from '../currency/query.form';

/**
 * 匿名查档
 */

@IonicPage()
@Component({
  selector: 'page-queryanonymousation',
  templateUrl: 'queryanonymousation.html',
})
export class QueryanonymousationPage {

  /**
   * 个人档的form
   */
  infoForm: FormGroup;


  /**
   * 家庭档的form
   */
  familyForm: FormGroup;

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
    grdcxName: CurrencyString.grdcxName,
    jtdcxName: CurrencyString.jtdcxName,
    cxgkdName: CurrencyString.cxgkdName,
    cxbrName: CurrencyString.cxbrName,
    cxjtcyName: CurrencyString.cxjtcyName,
    cdjlName: CurrencyString.cdjlName,
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private queryForm: QueryForm, public modalCtrl: ModalController) {
    this.infoForm = this.queryForm.createInfoForm(this.infoForm, 1);
    this.familyForm = this.queryForm.createFamilyForm(this.familyForm);
  }



  /**
   * 查询记录
   * @param name 跳转用的name
   */
  queryHistory(name) { 
    /**
     * 跳转到记录
     * @param index 0是个人查档  1是机构查档  
     * @param tabsName 当前的tab焦点
     * @param tabsArray 当前的tabs 名字数组 用来迭代 
     * @param personNo 输入的身份证号
     */
    let profileModal = this.modalCtrl.create(QueryhistorPage, { index: 3, tabsName: name, tabsArray: [{ name: name }],personNo:'450521199401156174' });
    profileModal.present();
  }

  perSonQuery() {

  }

  familyQuery() {

  }



}
