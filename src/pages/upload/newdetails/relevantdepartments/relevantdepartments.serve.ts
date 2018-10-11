import { RelevantdepartmentsEntity } from './relevantdepartments.model';
import { ApiUrl } from './../../../../infrastructure/api.url';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';



/**
 * 相关部门的serve
 */
@Injectable()
export class RelevantdepartmentsServe {
    constructor(private http: HttpClient) {

    }

    /**
     * 相关部门 
     */
    getIntroduction(): Observable<RelevantdepartmentsEntity<{T}>> {
        return this.http.get(ApiUrl.getIntroduction);
    }
}