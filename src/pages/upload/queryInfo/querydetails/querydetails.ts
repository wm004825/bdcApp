import { querydetailsEntity } from './querydetails.entity';
import { QuerydetailsServe } from './querycheckation.serve';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * 查档详情
 */

@IonicPage()
@Component({
  selector: 'page-querydetails',
  templateUrl: 'querydetails.html',
})
export class QuerydetailsPage {

  querydetailsEntity: querydetailsEntity = {
    Id: '',
  }

  data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private querydetailsServe: QuerydetailsServe, ) {
    this.querydetailsEntity.Id = navParams.get('IdentityCode')
    this.querydetailsServe.getCodePage(this.querydetailsEntity).subscribe(data => {
      if (data.StateCode == 1) {
        this.data = data.Data;
    
        this.data =  this.data.replace(/<!--.*?-->|\\n|\\t/g, '').replace(/\\"/g, '"')
        .replace(/contenteditable=\\"true\\"/g, '')
        .replace(/tbody>tr/g, '#cdmb_grd1 tbody>tr')
        .replace(/<div  class='cdids'>/, "<\/br><div class='text-center'>")
        .replace(/<div class='cdids'>/, "<\/br><div class='text-center'>")
        .replace(/#qrcode{width: 50px; height: 50px}/g, '#qrcode{width: 80px; height: 80px}')
        .replace(/"/, "").replace(/"$/, "");
        console.log(this.data);
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuerydetailsPage');
  } 

  goBack() {
    this.navCtrl.pop();
  }

}
