import { ApiUrl } from '../../../../infrastructure/api.url';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { ApiResultBusinessListFromMongo, businessListFromMongoEntity } from './unsubmitted.entity';
import { ApiResult } from '../../../../infrastructure/api.result';
/**
 * 未提交业务的serve 
 */
@Injectable()
export class UnsubmittedServe {
    constructor(private http: HttpClient) {

    }

    /**
     * 未提交业务列表 
     */
    getBusinessListFromMongo(): Observable<ApiResultBusinessListFromMongo<businessListFromMongoEntity>> {
        return this.http.get(ApiUrl.getBusinessListFromMongo);
    }

    /**
     * 删除未提交列
     * 
     */
    delBusinessForId(id: string): Observable<ApiResult<{}>> {
        return this.http.post(ApiUrl.delBusinessForId,{}, { params: { Id: id } });
    }


}