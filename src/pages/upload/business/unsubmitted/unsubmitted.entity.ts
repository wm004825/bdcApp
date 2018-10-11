import { ApiResult } from './../../../../infrastructure/api.result';
import { RequestPersons } from '../../handle/onlinepretrialdetails/onlinepretrialdetails.entity';

export interface ApiResultBusinessListFromMongo<businessListFromMongoEntity> extends ApiResult<{}> {
    Data?: businessListFromMongoEntity[]
}

export interface businessListFromMongoEntity {
    BDCAddress?: string,
    BDCUnitNo?: string,
    BDCUnitPaerNo?: string,
    BDCValue?: any,
    BorrowingAmount?: any,
    ChangeBefore?: boolean,
    CloseDownBefore?: boolean,
    CompanyId?: string,
    ContractHtml?: any,
    HouseNo?: any,
    HouseOwner?: any,
    Id?: string,
    InCollection?: boolean,
    Index?: number,
    IsCollect?: boolean,
    IsElec?: boolean,
    LoanDays?: any,
    LoanStart?: any,
    LoanType?: string,
    MongoId?: string,
    MortgageBefore?: boolean,
    MortgageDealDate?: any,
    MortgageDealNo?: any,
    MortgageHouseArea?: number,
    MortgageInfo?: any,
    MortgageLandArea?: number,
    MortgageMethod?: string,
    MortgageType?: string,
    Picture?: any,
    PreCheckItemId?: string,
    ProjectTypeId?: string,
    RegisteReason?: any,
    RegisteType?: string,
    RegisterType?: string,
    Remark?: string,
    RequestPersons?: RequestPersonsEntity[],
    RightsType?: string,
    SuretyType?: string,
    Type?: string,
    UserId?: string,
    UserName?: any,

    /**
     * 是否还有未认证  0即已认证完了。
     */
    needToAuth?: any,
}

/**
 * 继承 onlinepretrialdetails 权利人和义务人 的entity 
 */
export interface RequestPersonsEntity extends RequestPersons {
    Authorization?: boolean,
}
 