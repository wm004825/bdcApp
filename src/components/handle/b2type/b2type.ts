import { b2Type } from './../../../pages/upload/handle/onlineverification/onlineverification.entity';
import { Component, Input } from '@angular/core';

/**
 * b2业务办理
 */
@Component({
  selector: 'b2type',
  templateUrl: 'b2type.html'
})
export class B2typeComponent {

  @Input() b2Type: b2Type

  constructor() {
  }

  ngOnInit() {
    /**
     * 判断备案企业是否有信息
     */
    if (this.b2Type.company === undefined) {
     
    } else {
      this.b2Type.houseowner = this.b2Type.company.list[this.b2Type.company.index].Value;
    }
  }

  onVoted() {
    this.b2Type.houseowner = this.b2Type.company.list[this.b2Type.company.index].Value;
  }

}
