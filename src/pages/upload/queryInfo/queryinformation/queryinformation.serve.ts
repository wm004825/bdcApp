import { PersonUploadEntity, FamilyUploadEntity } from './queryinformation.entity';
import { ApiResult } from './../../../../infrastructure/api.result';
import { ApiUrl } from './../../../../infrastructure/api.url';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
/**
 * 个人查档的serve
 */
@Injectable()
export class QueryinformationServe {
    constructor(private http: HttpClient) {

    }

    /**
     * 个人档->查询个人 
     * @param PersonUploadItem 查询个人的参数
     */
    personUploadSave(PersonUploadEntity: PersonUploadEntity): Observable<ApiResult<{}>> {
        return this.http.post(ApiUrl.personUploadSave, PersonUploadEntity);
    }

    /**
     * 个人查档->查询家庭成员
     * @param FamilyUploadEntity 查询参数
     */
    familyUploadSave(FamilyUploadEntity: FamilyUploadEntity): Observable<ApiResult<{}>> {
        console.log(FamilyUploadEntity.values); 
        return this.http.post(ApiUrl.familyUploadSave, FamilyUploadEntity.values);
    }

    
}