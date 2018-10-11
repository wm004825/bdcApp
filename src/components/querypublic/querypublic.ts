import { QueryinformationEntity } from './../../pages/upload/queryInfo/currency/query.variable';
import { Component, Input } from '@angular/core';
import { CurrencyString } from '../../pages/upload/queryInfo/currency/query.variable';


CurrencyString
/**
 * 查档公开档通用
 */
@Component({
  selector: 'querypublic',
  templateUrl: 'querypublic.html'
})
export class QuerypublicComponent {

  /**
  * 个人档还是机构档
  */
  @Input() queryIndex: number;

  /**
   * 所需要的数据
   */
  @Input() data: QueryinformationEntity;

  /**
   * 查档通用字符串
   */
  CurrencyString = CurrencyString;

  /**
  * 公开档是否允许提交
  * 不用在2个页面写数据校验。在组件写即可
  */
  @Input() query: any;
  constructor() {

  }

  ngOnInit() {
    this.check2Select();
  }

  check2Select() {
    let selectData = this.data.list[this.data.index].selectData;
    /**
    * 设置select 的默认值
    */
    if (selectData) {
      if (selectData.value == "") selectData.value = selectData.list[selectData.index].Value;
    }
  }

  onVoted(event) {
    this.query.queryIsSubmit = false;
    this.check2Select();
  }

  onInput() {
    let listData = this.data.list[this.data.index];
    let no = '';
    let code = '';
    if (listData.no) no = listData.no;
    if (listData.code) code = listData.code;
    let newList = listData.selectData.list[listData.selectData.index];
    switch (this.data.value) {
      case CurrencyString.bdcqzName:
        listData.txt = '桂(' + no + ')' + listData.selectData.value + '第' + code + '号';
        if (listData.no.toString().substring(0, 3).includes('201') && listData.code.toString().length == newList.limit) {
          this.query.queryIsSubmit = true;
        }
        break;

      case CurrencyString.yfqzName:
        listData.txt = listData.selectData.value + '第' + code + '号';
        if (listData.code.toString().length == newList.limit && (listData.selectData.value == CurrencyString.yfyzName || listData.selectData.value == CurrencyString.yftzName || listData.selectData.value == CurrencyString.yfqzzName)) {
          this.query.queryIsSubmit = true;
        }
        break;

      case CurrencyString.qtName:
        if (listData.txt.includes('第') && listData.txt.includes('号')) {
          this.query.queryIsSubmit = true;
        }
        break;
    }
    console.log(this.query.queryIsSubmit);

  }


  /**
   * 修改2级select 
   */
  onchangSelect() {
    this.data.list[this.data.index].code = '';
    this.query.queryIsSubmit = false;
    let selectData = this.data.list[this.data.index].selectData;
    for (let i in selectData.list) {
      if (selectData.list[i].Value === selectData.value) {
        selectData.index = parseInt(i);
        this.onInput();
        return false;
      }
    }
  }
}