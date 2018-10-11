import { iInfoEntity, introsModeModule } from './departmentdetails.entity';
import { ApiUrl } from './../../../../infrastructure/api.url';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';



/**
 * 部门详情的serve
 */
@Injectable()
export class DepartmentdetailsServe {
    constructor(private http: HttpClient) {

    }

    /**
     * 部门详情
     */
    getIInfo(iInfoEntity: iInfoEntity): Observable<introsModeModule> {
        return this.http.get<introsModeModule>(ApiUrl.getIInfo, { params: <{}>iInfoEntity });
    }
}