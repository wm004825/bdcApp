import { b2Type } from './../../../pages/upload/handle/onlineverification/onlineverification.entity';
import { Component, Input } from '@angular/core';

/**
 * c2业务办理
 */
@Component({
  selector: 'c2type',
  templateUrl: 'c2type.html'
})
export class C2typeComponent {

  @Input() c2Type: b2Type

  constructor() { }

}
