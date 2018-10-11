import { commonType } from './../../../pages/upload/handle/onlineverification/onlineverification.entity';
import { Component, Input } from '@angular/core';

/**
 * 常用类型 
 */
@Component({
  selector: 'commontype',
  templateUrl: 'commontype.html'
})
export class CommontypeComponent {

  @Input() commonType: commonType;
  @Input() newTitle: string;

  /**
   * 是否显示权利人  true:显示    false 是不显示
   */
  @Input() showObligee: boolean;


  /**
   * 是否显示备案企业  true:显示   false 不显示
   */
  isCompany: boolean = true;
  constructor() {

  }

  ngOnInit() {
    /** 设置默认 */
    this.newTitle = this.newTitle === undefined ? '备案企业' : this.newTitle;

    /**
     * 判断备案企业是否有信息
     */
    if (this.commonType.company === undefined) {
      this.isCompany = false;
    } else {
      this.commonType.companyId = this.commonType.company.list[this.commonType.company.index].Value;
    }

    this.showObligee = this.showObligee === undefined ? true : false;

    this.commonType.code = '1441603';
    this.commonType.houseno = '邕房预字第' + this.commonType.code + '号';
    this.commonType.houseowner ='彭翠凤';
  }

  onVoted() {
    /** 置空数据 */
    this.commonType.no = this.commonType.code = this.commonType.houseno = '';
  }

  onVoted1() {
    this.commonType.companyId = this.commonType.company.list[this.commonType.company.index].Value;
  }

  onInput() { 
    switch (this.commonType.selectData.value) {
      case '不动产权证':
        this.commonType.houseno = '桂(' + this.commonType.no + ')南宁市不动产证明第' + this.commonType.code + '号';
        break;
      case '不动产证明':
        this.commonType.houseno = '桂(' + this.commonType.no + ')南宁市不动产证明第' + this.commonType.code + '号';
        break;
      case '邕房权证':
        this.commonType.houseno = '邕房权证第' + this.commonType.code + '号';
        break;
      case '邕房预字第':
        this.commonType.houseno = '邕房预字第' + this.commonType.code + '号';
        break;
      case '邕房预':
        this.commonType.houseno = '邕房预字第' + this.commonType.code + '号';
        break;

      case '邕房他字第':
        this.commonType.houseno = '邕房他字第' + this.commonType.code + '号';
        break;
    }
  }

}
