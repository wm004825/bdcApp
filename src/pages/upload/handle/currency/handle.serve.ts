import { ApiResult } from './../../../../infrastructure/api.result';
import { ApiUrl } from '../../../../infrastructure/api.url';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

/**
 * 在线办理和网上预审的的serve
 */
@Injectable()
export class HandleServe {
    constructor(private http: HttpClient) {

    }

    /**
     * 获取在线办理和网上预审的的列表
     */
    getProjectTypeList(): Observable<ApiResult<{}>> {
        return this.http.get(ApiUrl.getProjectTypeList);
    }
}