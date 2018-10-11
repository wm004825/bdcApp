import { QueryhistorPage } from './../queryhistor/queryhistor';
import { PublicFunction } from './../../../../public/public.function';
import { QueryinformationServe } from './queryinformation.serve';
import { PersonUploadEntity, FamilyUploadEntity } from './queryinformation.entity';
import { QueryForm } from '../currency/query.form';
import { CurrencyString, QueryString, QueryinformationData } from './../currency/query.variable';
import { UserInfo } from './../../../../infrastructure/user.info';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController, AlertController } from 'ionic-angular';
import { FormGroup } from "@angular/forms";
/**
 * 个人查档页面
 */
@IonicPage()
@Component({
  selector: 'page-queryinformation',
  templateUrl: 'queryinformation.html',
})
export class QueryinformationPage {
  /**
   * 个人档的form
   */
  infoForm: FormGroup;

  /**
   * 家庭档的form
   */
  familyForm: FormGroup;

  formErrors = {};
  validationMessages = {};

  /**
   * 公开档是否允许提交
   * 不用在2个页面写数据校验。在组件写即可
   */
  query = {
    queryIsSubmit: false
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public alertCtrl: AlertController, private queryForm: QueryForm, private userInfo: UserInfo, private queryinformationServe: QueryinformationServe, public publicFunction: PublicFunction) {
    this.infoForm = this.queryForm.createInfoForm(this.infoForm);
    this.formErrors = this.queryForm.formErrors;
    this.validationMessages = this.queryForm.validationMessages;
    this.familyForm = this.queryForm.createFamilyForm(this.familyForm);
  }

  ionViewCanEnter(): boolean {
    return this.publicFunction.checkUserIsLogin();
  }

  /**
   * 初始化字符串
   */
  initString = {
    /**
     * 个人查档 tabs 的name
     */
    pet: QueryString.queryinformationPet,


    tabA: [
      { name: CurrencyString.gkdcxName },
      { name: CurrencyString.mxdcxName }
    ],
    gkdcxName: CurrencyString.gkdcxName,
    mxdcxName: CurrencyString.mxdcxName,
    jtdcxName: CurrencyString.jtdcxName,
    grdcxName: CurrencyString.grdcxName,
    bdcqzName: CurrencyString.bdcqzName,
    yfqzName: CurrencyString.yfqzName,
    qtName: CurrencyString.qtName,

    cxgkdName: CurrencyString.cxgkdName,
    cxbrName: CurrencyString.cxbrName,
    cxjtcyName: CurrencyString.cxjtcyName,
    cdjlName: CurrencyString.cdjlName,
  }
  user = {
    personName: this.userInfo.GetPersonName(),
    personNo: this.userInfo.GetPersonNo(),
    userName: this.userInfo.GetUserName(),
  };

  /**
   * 公开档查询的数据
   */
  queryinformationData = QueryinformationData;

  /**
   *  曾用名的数量 
   */
  beforeNameLength: number = CurrencyString.beforeNameLength;

  onVoted(event) {

  }

  /**
   * 点击头部切换
   */
  petChanged() {
    QueryString.queryinformationPet = this.initString.pet;
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
    let profileModal = this.modalCtrl.create(QueryhistorPage, { index: 0, tabsName: this.initString.pet, tabsArray: this.initString.tabA, });
    profileModal.present();
  }


  /**
   * 查询本人
   */
  perSonQuery() {
    let personUploadEntity: PersonUploadEntity = {
      PropertyRightNum: '',
      personName: this.user.personName,
      personNo: this.user.personNo,
    };

    this.infoForm.value.data[0].arr.forEach(data => {
      if (data.name != "") {
        personUploadEntity.personName += "," + data.name;
        personUploadEntity.personNo += "," + this.user.personNo;
      }
    });
    // this.authActionSheet.actionSheet(this.user.personName, this.user.personNo, this.user.userName).subscribe(value => {
    this.queryinformationServe.personUploadSave(personUploadEntity).subscribe(data => {
      if (data.StateCode == 1) {
        this.publicFunction.newToast(data.Message)
      } else {
        this.publicFunction.newToast(data.Message)
      }
    })
    // }); 
  }


  /**
   * 查询家庭成员
   */
  familyQuery() {
    let FamilyUploadEntity: FamilyUploadEntity = {
      values: [
        { Key: '', Value: '', auth: true, canDel: false }
      ]
    }
    let data = this.familyForm.value.data;
    for (let index in data) {
      if (index == '0') {
        FamilyUploadEntity.values[0].Key = data[index].userName;
        FamilyUploadEntity.values[0].Value = data[index].personNo;
      } else {
        FamilyUploadEntity.values.push({ Key: data[index].userName, Value: data[index].personNo });
      }

      /**
       * 迭代曾用名
       */
      for (let item in data[index].arr) {
        if (data[index].arr[item].name != "") {
          FamilyUploadEntity.values[index].Key += "," + data[index].arr[item].name;
          FamilyUploadEntity.values[index].Value += "," + data[index].personNo;
        }
      }
    }

    // this.authActionSheet.actionSheet(this.user.personName, this.user.personNo, this.user.userName).subscribe(value => {

    console.log(FamilyUploadEntity.values);
    this.queryinformationServe.familyUploadSave(FamilyUploadEntity).subscribe(data => {
      if (data.StateCode == 1) {
        this.publicFunction.newToast(data.Message)
      } else {
        this.publicFunction.newToast(data.Message)
      }
    })
    // });
  }


  /**
   * 查询公开档
   */
  openQuery() {
    let data = this.queryinformationData;
    if (this.query.queryIsSubmit) {
      this.queryinformationServe.personUploadSave({ PropertyRightNum: data.list[data.index].txt }).subscribe(data => {
        if (data.StateCode == 1) {
          this.publicFunction.newToast(data.Message);
        } else {
          this.publicFunction.newToast(data.Message);
        }
      })
    } else {
      this.publicFunction.newToast('您输入的权证信息有误，请重新输入！')
    }
  }
}
