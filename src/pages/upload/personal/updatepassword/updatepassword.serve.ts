import { updatePasswordCodeEntity, updatePasswordEntity } from './updatepassword.entity';
import { ApiResult } from './../../../../infrastructure/api.result';
import { ApiUrl } from './../../../../infrastructure/api.url';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
/**
 * 登录页的serve
 */
@Injectable()
export class UpdatepasswordServe {
    constructor(private http: HttpClient) {

    }

    /**
     * 该方法由于是拼url
     * 获取验证码方法
     * @param codeModel 获取验证码参数
     */
    getCode(updatePasswordCodeEntity: updatePasswordCodeEntity): Observable<ApiResult<{}>> {
        return this.http.post(ApiUrl.forgotPassword, updatePasswordCodeEntity);
    }

    /**
     * 修改密码
     * @param updatePasswordEntity 修改密码的参数
     */
    resetPassword(updatePasswordEntity: updatePasswordEntity): Observable<ApiResult<{}>> {
        return this.http.post(ApiUrl.resetPassword, updatePasswordEntity);
    }
}