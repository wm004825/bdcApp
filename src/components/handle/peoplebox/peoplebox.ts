import { RequestPersons } from './../../../pages/upload/handle/onlinepretrialdetails/onlinepretrialdetails.entity'; 
import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * 权利人和义务人的列表
 */
@Component({
  selector: 'peoplebox',
  templateUrl: 'peoplebox.html'
})
export class PeopleboxComponent {

  @Input() RequestPersons: RequestPersons;


  /**
   * 迭代判断是权利人还是义务人   默认权利人
   */
  @Input() value: string = '权利人';

  /**
   * 自定义事件
   * 向父组件传送值
   */
  @Output() goMore: EventEmitter<any> = new EventEmitter();
  constructor() { 
  }

  /**
   * 点击组件了
   * @param i 下标
   */
  goClick(i:number) {
    this.goMore.emit(i);
  }

}
