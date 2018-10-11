import { GuidedetailsServe } from './guidedetails.serve';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { getGuideSonEntity, guidedetailsEntity } from './guidedetails.entity';

/**
 * 业务指南详情
 */

@IonicPage()
@Component({
  selector: 'page-guidedetails',
  templateUrl: 'guidedetails.html',
})
export class GuidedetailsPage {

  getGuideSonEntity: getGuideSonEntity;
  guidedetailsEntity:guidedetailsEntity;
  constructor(public navCtrl: NavController, public navParams: NavParams, private guidedetailsServe: GuidedetailsServe) {
    this.getGuideSonEntity = { id: navParams.get('id') }
  }

  ngOnInit() {
    this.guidedetailsServe.getGuideSon(this.getGuideSonEntity).subscribe(data => {
      this.guidedetailsEntity = data; 
    })
  }

}
