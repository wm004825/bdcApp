import { selectData } from './../../public/public.entity';
import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * tip提示文字
 */
@Component({
  selector: 'tip',
  templateUrl: 'tip.html'
})
export class TipComponent {
  /**
   * 显示的文字
   */
  @Input() title = '备案企业';
  @Input() ionicColor: string = '#ff7f00';
  @Input() background: string = '#f0f8ff';
  @Input() showIonic:boolean ;

  /**
   * 传入右边的值
   */
  @Input() moreValue: string;
  @Input() moreIonicColor: string = '#ff7f00';

  /**
   * 传入的select
   */
  @Input() selectData: selectData;
  @Input() selectColor: string = '#ff7f00';
  constructor() {
     
  }
  ngOnInit() { 
    /**
     * 设置select 的默认值
     */
    if (this.selectData) {
       this.selectData.value = this.selectData.list[this.selectData.index].Value;
    }
    this.showIonic = this.showIonic === undefined ? true : false;
  }

  /**
   * 自定义事件
   * 向父组件传送值
   */
  @Output() onVoted: EventEmitter<any> = new EventEmitter();
  @Output() goMore: EventEmitter<any> = new EventEmitter();

  /**
   * 修改select 
   * @param event 根据页面返回来的值
   */
  onchangSelect(event) {
    for (let i in this.selectData.list) {
      if (this.selectData.list[i].Value === this.selectData.value) {
        this.selectData.index = parseInt(i);
        this.onVoted.emit(this.selectData.value);
        return false;
      }
    }
  }

  /**
   * 点击组件
   */
  onClick() {
    this.goMore.emit(true);
  }

}
