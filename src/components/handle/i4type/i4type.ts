import { commonType } from './../../../pages/upload/handle/onlineverification/onlineverification.entity';
import { Component, Input } from '@angular/core';

/**
 * i4 业务办理
 */
@Component({
  selector: 'i4type',
  templateUrl: 'i4type.html'
})
export class I4typeComponent {

  @Input() i4Type: commonType

  constructor() {
  }

  onInput() {
    this.i4Type.houseno = '邕房权证字第' + this.i4Type.code + '号';
  }

}
