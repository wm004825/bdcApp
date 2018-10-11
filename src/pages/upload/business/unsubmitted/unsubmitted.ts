import { OnlinepretrialdetailsPage } from './../../handle/onlinepretrialdetails/onlinepretrialdetails'; 
import { PublicFunction } from './../../../../public/public.function';
import { UnsubmittedServe } from './unsubmitted.serve';
import { selectData } from './../../../../public/public.entity';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { businessListFromMongoEntity, RequestPersonsEntity } from './unsubmitted.entity';

/**
 * 未提交业务
 */

@IonicPage()
@Component({
  selector: 'page-unsubmitted',
  templateUrl: 'unsubmitted.html',
})
export class UnsubmittedPage {


  selectData: selectData = {
    index: 0,
    list: [
      { Key: '1', Value: '预购商品房抵押权预告登记', },
    ],
    value: '',
  }

  /**
   * 从接口获取的数据
   */
  BusinessListFromMongo: businessListFromMongoEntity[];

  /**
   * 筛选用是数据
   */
  CopyBusinessListFromMongo: businessListFromMongoEntity[];


  /**
   * 义务人
   */
  RequestPersons: RequestPersonsEntity;

  /**
   * input 输入的
   */
  searchQuery: string = '';

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams, private unsubmittedServe: UnsubmittedServe, private publicFunction: PublicFunction) {

  }

  ionViewDidLoad() {
    this.initItems();
  }

  initItems() {
    this.unsubmittedServe.getBusinessListFromMongo().subscribe(data => {
      data.StateCode == 1 ? this.CopyBusinessListFromMongo = this.BusinessListFromMongo = data.Data : this.publicFunction.newToast('服务器异常,请稍后尝试');
      this.BusinessListFromMongo.forEach((item, index) => {
        let PersonsIndex = 0;
        item.RequestPersons.forEach(value => {
          if (!value.Authorization && value.RoleName == '义务人') {
            PersonsIndex++;
          }
        })
        this.BusinessListFromMongo[index].needToAuth = PersonsIndex;
      })
    })
  }

  /**
   * 筛选
   * @param ev 返回的数据 
   */
  getItems(ev: any) {
    this.CopyBusinessListFromMongo = this.BusinessListFromMongo;
    const val = ev.target.value;
    if (val && val.trim() != '') {
      this.CopyBusinessListFromMongo = this.CopyBusinessListFromMongo.filter(item => {
        return item.BDCAddress.toLowerCase().indexOf(val.toLowerCase()) > -1;
      })
    }
  }

  /**
   * 删除
   */
  delete(item: any) {
    this.publicFunction.newAlert({
      message: '是否确认删除此条待预约业务？',
      rightFunction: () => {
        this.unsubmittedServe.delBusinessForId(item.Id).subscribe(data => {
          if (data.StateCode == 1) {
            this.BusinessListFromMongo.splice(this.BusinessListFromMongo.indexOf(item), 1)
          }
          this.publicFunction.newToast(data.Message);
        })
      }
    });
  }

  /**
   * 添加页面
   * @param name 传入是权利人还是义务人
   * @param index 传入的下标
   * @param requestPersons 义务人和权利的数组
   * @param type 判断传入是添加还是修改 add是添加 check是修改
   */
  goAdd(name: string, index: number) {
    console.log(index)
    let profileModal = this.modalCtrl.create(OnlinepretrialdetailsPage, { RoleName: name, requestPersons: this.BusinessListFromMongo[index].RequestPersons, type: 'check' });
    profileModal.present();

  }

}
