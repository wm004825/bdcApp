import {  commonTypeEntity, ApiResultUserInfo, handleUserInfo } from './onlineverification.entity';
import { typecodeEntity } from './../currency/handle.variable';
import { ApiResult } from '../../../../infrastructure/api.result';
import { ApiUrl } from '../../../../infrastructure/api.url';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
/**
 * 在线办理和网上预审的信息验证的serve 
 */
@Injectable()
export class OnlineverificationServe {
    constructor(private http: HttpClient) {

    }

    /**
     * 查询备案企业
     * @param typecode 备案企业的参数
     */
    getCompanyNames(typecode: typecodeEntity): Observable<ApiResult<{}>> {
        return this.http.get(ApiUrl.getCompanyNames, { params: <{}>typecode });
    }

    /**
     * 该方法由于是拼url  传对象的话会报错
     * 提交数据
     * @param commonTypeEntity 提交的数据
     */
    checkhouseinfo(commonTypeEntity: commonTypeEntity): Observable<ApiResultUserInfo<handleUserInfo>> {
        return this.http.post(ApiUrl.checkhouseinfo, {}, {
            params: {
                houseno: commonTypeEntity.houseno,
                houseowner: commonTypeEntity.houseowner,
                typecode: commonTypeEntity.typecode,
                companyId: commonTypeEntity.companyId,
            }
        });
    }
}