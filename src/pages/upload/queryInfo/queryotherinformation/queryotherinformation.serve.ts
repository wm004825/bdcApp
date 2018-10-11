import { CompaniesEntity, personEntity } from './queryotherinformation.entity';
import { ApiResult } from './../../../../infrastructure/api.result';
import { ApiUrl } from './../../../../infrastructure/api.url';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
/**
 * 机构查档的serve
 */
@Injectable()
export class QueryotherinformationServe {
    constructor(private http: HttpClient) {

    }

    /**
     * 个人档->查询个人 
     * @param PersonUploadItem 查询个人的参数
     */
    getCompanies(CompaniesEntity: CompaniesEntity): Observable<ApiResult<{}>> {
        return this.http.get(ApiUrl.getCompanies, { params: <{}>CompaniesEntity });
    }

    /**
     * 机构查档公开档
     * @param personEntity 请求参数
     */
    personArchivalQuery(personEntity: personEntity): Observable<ApiResult<{}>> {
        return this.http.post(ApiUrl.personArchivalQuery, {}, {
            params: {
                userName: personEntity.userName,
                personno: personEntity.personno,
                companyId: personEntity.companyId,
                PropertyRightNum: personEntity.PropertyRightNum,
            }
        });

    }


}