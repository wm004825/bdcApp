import { guideEntity } from './guide.entity';
import { ApiUrl } from './../../../../infrastructure/api.url';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';



/**
 * 业务指南的serve
 */
@Injectable()
export class GuideServe {
    constructor(private http: HttpClient) {

    }

    /**
     * 获取业务指南
     */
    getGuide(): Observable<guideEntity<{ T }>> {
        return this.http.get<guideEntity<{ T }>>(ApiUrl.getGuide);
    }
}