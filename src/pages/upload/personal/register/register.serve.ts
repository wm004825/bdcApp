import { codeEntity, registerModel } from './register.entity';
import { ApiResult } from './../../../../infrastructure/api.result';
import { ApiUrl } from './../../../../infrastructure/api.url';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
/**
 * 登录页的serve
 */
@Injectable()
export class RegisterServe {
    constructor(private http: HttpClient) {

    }

    /**
     * 该方法由于是拼url
     * 获取验证码方法
     * @param codeModel 获取验证码参数
     */
    getCode(codeEntity: codeEntity): Observable<ApiResult<{}>> {
        return this.http.post(ApiUrl.sendMobileValidCode, {}, { params: { phone: codeEntity.phone, isRegister: codeEntity.isRegister.toString() } });
    }

    /**
   * 用户注册
   * @param registerModel 注册参数
   */
    register(registerModel: registerModel): Observable<ApiResult<{}>> {
        return this.http.post(ApiUrl.registerModel, {}, { params: <{}>registerModel });
    }
}