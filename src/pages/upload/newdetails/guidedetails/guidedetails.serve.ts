import { getGuideSonEntity, guidedetailsEntity } from './guidedetails.entity';

import { ApiUrl } from './../../../../infrastructure/api.url';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';



/**
 * 业务指南的serve
 */
@Injectable()
export class GuidedetailsServe {
    constructor(private http: HttpClient) {

    }

    /**
     * 获取业务指南详情
     */
    getGuideSon(getGuideSonEntity: getGuideSonEntity): Observable<guidedetailsEntity> {
        return this.http.get<guidedetailsEntity>(ApiUrl.getGuideSon, { params: <{}>getGuideSonEntity });
    }
}