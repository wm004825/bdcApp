import { pageEntity } from './../../../../public/public.entity';
import { openArchivalEntity } from './queryhistor.entity';
import { ApiResult } from './../../../../infrastructure/api.result';
import { ApiUrl } from './../../../../infrastructure/api.url';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';


/**
 * 查档记录的serve
 */
@Injectable()
export class QueryhistorServe {
    constructor(private http: HttpClient) {

    }

    /**
   * 个人档->查询公开档记录  
   * @param openArchivalEntity 查询公开档记录的参数
   */
    getOpenArchivalList(openArchivalEntity: openArchivalEntity): Observable<ApiResult<{}>> { 
        return this.http.get(ApiUrl.getOpenArchivalList, { params: <{}>openArchivalEntity });
    }

    /**
    * 个人档->查询名下档和家庭档记录
    * @param pageEntity 查询公开档记录的参数   
    */
    getPersonArchivalList(pageEntity: pageEntity): Observable<ApiResult<{}>> {
        return this.http.get(ApiUrl.getPersonArchivalList, { params: <{}>pageEntity });
    }

    /**
     * 机构查档->个人档记录
     * @param pageEntity 请求参数
     */
    getPersonOrganization(pageEntity: pageEntity): Observable<ApiResult<{}>> {
        return this.http.get(ApiUrl.getPersonOrganization, { params: <{}>pageEntity })
    }

    /**
     * 匿名查档->名下档记录
     * @param openArchivalEntity 请求参数
     */
    getPersonsAnonymous(openArchivalEntity: openArchivalEntity): Observable<ApiResult<{}>> {
        return this.http.get(ApiUrl.getPersonsAnonymous, { params: <{}>openArchivalEntity })
    }

    /**
     * 匿名查档->家庭档记录
     * @param openArchivalEntity 请求参数
     */
    getFamilysAnonymous(openArchivalEntity: openArchivalEntity): Observable<ApiResult<{}>> {
        return this.http.get(ApiUrl.getFamilysAnonymous, { params: <{}>openArchivalEntity })
    }

    /**
     * 查验查档->查询记录  
     * @param pageEntity 查询公开档记录的参数
     */
    getCodePage(pageEntity: pageEntity): Observable<ApiResult<{}>> {
        return this.http.post(ApiUrl.getCodePage, pageEntity);
    }
}