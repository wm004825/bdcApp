import { ApiResult } from './../../../../infrastructure/api.result';
import { loginEntity } from './login.entity';
import { ApiUrl } from './../../../../infrastructure/api.url';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
/**
 * 登录页的serve
 */
@Injectable()
export class LoginServe {
    constructor(private http: HttpClient) {

    }

    /**
     * 登录
     * @param loginEntity 登录的参数
     */
    login(loginEntity: loginEntity): Observable<ApiResult<{}>> {
        loginEntity.grant_type = 'password';
        return this.http.post(ApiUrl.login, loginEntity);
    }
}