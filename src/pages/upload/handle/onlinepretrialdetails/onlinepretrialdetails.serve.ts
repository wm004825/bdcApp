import { ApiResult } from './../../../../infrastructure/api.result';
import { ApiResultCompanyInfo, ApiResultGetEmptyBaseInfo, getEmptyBaseInfo, company, companyInfo } from './onlinepretrialdetails.entity';
import { typecodeEntity } from './../currency/handle.variable';
import { ApiUrl } from './../../../../infrastructure/api.url';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
/**
 * 在线办理和网上预审的三级详情的serve 
 */
@Injectable()
export class OnlinepretrialdetailsServe {
    constructor(private http: HttpClient) {

    }

    /**
     * 获取权利人
     */
    getCompanyInfo(typecode: typecodeEntity): Observable<ApiResultCompanyInfo<companyInfo>> {
        return this.http.get(ApiUrl.getCompanyInfo, { params: <{}>typecode });
    }

    /**
     * 获取要提交的表单(我也不知道干嘛的)
     */
    getEmptyBaseInfo(typecode: typecodeEntity): Observable<ApiResultGetEmptyBaseInfo<getEmptyBaseInfo>> {
        return this.http.get(ApiUrl.getEmptyBaseInfo, { params: <{}>typecode });
    }

    /**
     * 提交列表
     * @param company 提交表单的参数
     */
    createBusinessToMongo(company: company, getEmptyBaseInfo: getEmptyBaseInfo): Observable<ApiResult<{}>> {
        return this.http.post(ApiUrl.createBusinessToMongo, { 'objectstr': JSON.stringify(getEmptyBaseInfo) }, {
            params: { companyId: company.companyId, }
        });
    }


}