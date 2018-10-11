import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * tip提示文字
 */
@Component({
  selector: 'newtip',
  templateUrl: 'newtip.html'
})
export class NewtipComponent {

  /**
  * 显示的文字
  */
  @Input() title = '权利人信息';
  @Input() background: string = '#f5f5f5';

  /**
   * 传入右边的值
   */
  @Input() moreValue: string = '添加';
  @Input() moreIonic: string = 'add';
  /**
   * 自定义事件
   * 向父组件传送值
   */
  @Output() goMore: EventEmitter<any> = new EventEmitter();
  constructor() {
  }


  onClick() {
    this.goMore.emit(true);
  }




}
