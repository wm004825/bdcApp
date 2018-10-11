import { Component,Input } from '@angular/core';
import { commonType } from './../../../pages/upload/handle/onlineverification/onlineverification.entity';
/**
 * d3业务
 */
@Component({
  selector: 'd3type',
  templateUrl: 'd3type.html'
})
export class D3typeComponent {

  @Input() d3Type: commonType;
  @Input() newTitle:string  = '抵押人证件号';
  @Input() newPlaceholder:string = '开发企业的统一社会信用代码或组织机构代码';
  constructor() { 
  }

}
