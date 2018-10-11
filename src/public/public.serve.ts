
import { Injectable } from '@angular/core';
import { pageEntity,anyArrya  } from './public.entity';
import { ApiUrl } from '../infrastructure/api.url';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';  
/**
 * 通用serve
 */
@Injectable()
export class PublicServe {

    constructor(private http: HttpClient) {

    }
    /**
     * 请求新闻列表的接口
     * @param page 数量 默认数量5个
     */
    getNewsList(pageEntity?: pageEntity): Observable<anyArrya[]> {
        return this.http.get<anyArrya[]>(ApiUrl.getNewsList, { params: <{}>pageEntity });
    }
}