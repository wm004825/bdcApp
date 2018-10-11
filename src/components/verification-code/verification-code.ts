import { FormGroup } from '@angular/forms';
import { verificationCodeEntity } from './../../public/public.entity';
import { Component, Input, Output, EventEmitter } from '@angular/core';
/**
 * 获取验证码
 */
@Component({
  selector: 'verification-code',
  templateUrl: 'verification-code.html'
})
export class VerificationCodeComponent {
  @Input() verifyCode: verificationCodeEntity;
  @Input() form: FormGroup;


  downValue: number;
  /**
   * 自定义事件
   * 向父组件传送值
   */
  @Output() onVoted: EventEmitter<any> = new EventEmitter();
  constructor() {

  }

  ngOnInit() {
    this.downValue = this.verifyCode.countDown;
  }

  /**
   * 获取验证码倒计时
   */
  settime() {
    if (this.verifyCode.countDown == 0) {
      this.verifyCode.disable = true;
      this.verifyCode.verifyCodeTips = "获取验证码";
      this.verifyCode.countDown = this.downValue;
      return;
    }
    this.verifyCode.disable = false;
    this.verifyCode.verifyCodeTips = "重新获取" + this.verifyCode.countDown + "秒";
    this.verifyCode.countDown--;
    setTimeout(() => {
      this.settime();
    }, 1000);
  }

  /**
   * 点击获取验证码
   */
  getCode() {
    this.settime();
    this.onVoted.emit(true);
  }

}
