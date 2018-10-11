import { guideSonList, getGuideSonListEntity } from './guidelist.eneity';
import { ApiUrl } from './../../../../infrastructure/api.url';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';



/**
 * 业务指南列表的serve
 */
@Injectable()
export class GuidelistServe {
    constructor(private http: HttpClient) {

    }

    /**
     * 获取业务指南列表
     */
    getGuideSonList(getGuideSonListEntity: getGuideSonListEntity): Observable<guideSonList> {
        return this.http.get<guideSonList>(ApiUrl.getGuideSonList, { params: <{}>getGuideSonListEntity });
    } 
}