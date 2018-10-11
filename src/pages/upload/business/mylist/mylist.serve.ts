import { mylistEntity, ApiResultMyList } from './mylist.entity';
import { pageEntity } from './../../../../public/public.entity'; 
import { ApiUrl } from './../../../../infrastructure/api.url';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
/**
 * 在线办理和网上预审的三级详情的serve 
 */
@Injectable()
export class MyListServe {
    constructor(private http: HttpClient) {

    }

    /**
     * 获取我的
     */
    getMyList(pageEntity: pageEntity): Observable<ApiResultMyList<mylistEntity>> {
        return this.http.get(ApiUrl.getMyList, { params: <{}>pageEntity });
    }

}