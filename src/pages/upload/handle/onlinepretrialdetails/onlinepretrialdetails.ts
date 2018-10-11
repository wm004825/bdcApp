import { OnlinepretrialdetailsServe } from './onlinepretrialdetails.serve';
import { AddpeoplePage } from './../addpeople/addpeople';
import { handleEntity, handleData, loanType, typecodeEntity } from './../currency/handle.variable';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { RequestPersons, getEmptyBaseInfo, company } from './onlinepretrialdetails.entity';
import { selectData } from '../../../../public/public.entity';

/**
 * 在线办理和网上预审的三级详情
 */

@IonicPage()
@Component({
  selector: 'page-onlinepretrialdetails',
  templateUrl: 'onlinepretrialdetails.html',
})
export class OnlinepretrialdetailsPage {
  handleEntity: handleEntity = {
    name: handleData.current.name,
    title: handleData.current.title, 
  }

  /**
   * 贷款类型
   */
  loanType:selectData = loanType;

  /**
   * 提交的数据
   */
  getEmptyBaseInfo: getEmptyBaseInfo = {
    RequestPersons: [],
    MortgageInfo: {
      LoanStart: '2018-09-02',
      LoanDays: '2018-09-03',
    },
    MortgageDealDate: '2018-09-01',

  };


  /**
   *获取备案企业的entity
   */
  typecodeEntity: typecodeEntity = {
    typecode: ''
  };
  /**
   * 提交表单的参数
   */
  company: company = {
    companyId: '',
  };


  constructor(public navCtrl: NavController,public modalCtrl: ModalController, public navParams: NavParams, private onlinepretrialdetailsServe: OnlinepretrialdetailsServe) {
    this.handleEntity.projectName = navParams.get('projectName');
    // this.handleUserInfo = navParams.get('data'); 
    this.typecodeEntity.typecode = navParams.get('typecode');
    this.getEmptyBaseInfo.BDCAddress = navParams.get('data').HouseAddress;
    this.getEmptyBaseInfo.MortgageHouseArea = navParams.get('data').HouseArea;
    this.getEmptyBaseInfo.BDCUnitNo = navParams.get('data').HouseNo;
    this.getEmptyBaseInfo.BDCUnitPaerNo = navParams.get('data').HousePaperNo;
    this.getEmptyBaseInfo.SuretyType = '按合同约定';
    this.company.companyId = navParams.get('company').Key;
    /**
    * 获取权利人信息 也就是备案企业的
    */
    this.onlinepretrialdetailsServe.getCompanyInfo({ typecode: navParams.get('typecode') }).subscribe(data => {
      if (data.StateCode == 1) {
        data.Data.forEach(item => {
          if (item.Name == navParams.get('company').Value) {
            let requestPersons: RequestPersons = {
              Id: item.Id,
              Keeper: true,
              PersonName: item.Name,
              PaperNo: item.Number,
              PersonType: '企业',
              RoleName: '权利人',
              MobileNo: item.Phone,
              PaperName: '统一社会信用代码',
              ShareType: '单独所有',
              Address: item.Address,
            }
            this.getEmptyBaseInfo.RequestPersons.push(requestPersons);
          }
        })
      }
    })

    /**
     * 从上个页面传进来的义务人
     */
    if (navParams.get('data').Owners) {
      navParams.get('data').Owners.forEach(item => {
        let newRequestPersons: RequestPersons = {
          Keeper: false,
          PaperNo: item.PersonNo,
          PersonName: item.Name,
          PersonType: item.PersonType,
          PaperName: '身份证',
          RoleName: item.RoleName,
          ShareType: "单独所有",
          defaults: true,
        }
        this.getEmptyBaseInfo.RequestPersons.push(newRequestPersons);
      })
    }

  }

  ngOnInit() {

  }


  /**
   * 提交到业务列表
   */
  goSubmit() {
    this.getEmptyBaseInfo.LoanType = this.loanType.value;
    console.log(this.getEmptyBaseInfo);
    this.onlinepretrialdetailsServe.createBusinessToMongo(this.company, this.getEmptyBaseInfo).subscribe(data => {
      console.log(data);
    })
  }


  /**
   * 添加页面
   * @param name 传入是权利人还是义务人
   * @param requestPersons 义务人和权利的数组
   * @param type 判断传入是添加还是修改
   */
  goAdd(name: string) {
    let profileModal = this.modalCtrl.create(AddpeoplePage, { RoleName: name, requestPersons: this.getEmptyBaseInfo.RequestPersons, type: 'add' });
    profileModal.present();
  }

  /**
   * 跳转详情
   * @param name 传入是权利人还是义务人
   * @param requestPersons 义务人和权利的数组
   * @param type 判断传入是添加还是修改 add是添加 check是修改
   */
  goDetails(event, name: string) {
    let profileModal = this.modalCtrl.create(AddpeoplePage, { RoleName: name, requestPersons: this.getEmptyBaseInfo.RequestPersons, type: 'check', index: event });
    profileModal.present();
  }
}
