import { pageEntity } from './../../../../public/public.entity';
import { ApiResult } from './../../../../infrastructure/api.result';
import { ApiUrl } from './../../../../infrastructure/api.url';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';


/**
 * 查档记录的serve
 */
@Injectable()
export class QueryCheckationServe {
    constructor(private http: HttpClient) {

    }

    /**
     * 查验查档->查询记录  
     * @param pageEntity 查询公开档记录的参数
     */
    getCodePage(pageEntity: pageEntity): Observable<ApiResult<{}>> {
        return this.http.post(ApiUrl.getCodePage, pageEntity);
    }
}