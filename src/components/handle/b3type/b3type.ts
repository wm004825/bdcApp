import { commonType } from './../../../pages/upload/handle/onlineverification/onlineverification.entity';
import { Component, Input } from '@angular/core';

/**
 * b3业务办理
 */
@Component({
  selector: 'b3type',
  templateUrl: 'b3type.html'
})
export class B3typeComponent {

  @Input() b3Type: commonType;
  isCompany: boolean = true;
  constructor() {

  }
  ngOnInit() {
    /**
     * 判断备案企业是否有信息
     */
    if (this.b3Type.company === undefined) {
      this.isCompany = false;
    } else {
      this.b3Type.houseowner = this.b3Type.company.list[this.b3Type.company.index].Value;
    } 
  }

  onVoted() {
    this.b3Type.houseowner = this.b3Type.company.list[this.b3Type.company.index].Value;
  }

}
