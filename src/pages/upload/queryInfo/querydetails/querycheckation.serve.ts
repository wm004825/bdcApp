import { ApiResult } from './../../../../infrastructure/api.result';
import { ApiUrl } from './../../../../infrastructure/api.url';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { querydetailsEntity } from './querydetails.entity';


/**
 * 查档记录的serve
 */
@Injectable()
export class QuerydetailsServe {
    constructor(private http: HttpClient) {

    }

    /**
     * 查档详情
     */
    getCodePage(querydetailsEntity: querydetailsEntity): Observable<ApiResult<{}>> {
        return this.http.get(ApiUrl.getHtmlContentResultByIdentityCode, { params: <{}>querydetailsEntity });
    }
}