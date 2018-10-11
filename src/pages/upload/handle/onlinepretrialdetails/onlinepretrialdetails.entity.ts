import { ApiResult } from './../../../../infrastructure/api.result';


export interface ApiResultCompanyInfo<companyInfo> extends ApiResult<{}> {
    Data?: companyInfo[]
}

export interface ApiResultGetEmptyBaseInfo<getEmptyBaseInfo> extends ApiResult<{}> {
    Data?: getEmptyBaseInfo
}

/**
 * 从接口获取的权利人
 */
export interface companyInfo {
    Address?: string,
    CreateTime?: string,
    Deleted?: boolean,
    Id?: string,
    Name?: string,
    Number?: string,
    NumberType?: string,
    Phone?: string,
    Switch?: boolean,
    Type?: string,
    UpdateUserId?: string,
}

/**
 * 权利人和义务人
 */
export interface RequestPersons {
    Address?: string,
    BaseInfoId?: any,
    Id?: string,
    Keeper?: boolean,
    MobileNo?: string,
    PaperName?: string,
    PaperNo?: string,
    PersonName?: string,
    PersonType?: string,
    PostNumber?: any,
    RoleName?: string,
    ShareType?: string,
    defaults?: boolean,
}
/**
 * 最终提交的数据
 */
export interface getEmptyBaseInfo {
    BDCAddress?: string,
    BDCUnitNo?: string,
    BDCUnitPaerNo?: string,
    BDCValue?: number,
    BorrowingAmount?: number,
    ChangeBefore?: false,
    CloseDownBefore?: false,
    CompanyId?: string,
    Id?: string,
    InCollection?: false,
    Index?: number,
    IsCollect?: false,
    LoanDays?: string,
    LoanStart?: string,
    LoanType?: string,
    MortgageBefore?: false,
    MortgageDealDate?: string,
    MortgageDealNo?: string,
    MortgageHouseArea?: number,
    MortgageInfo?: mortgageInfo,
    MortgageLandArea?: number,
    MortgageMethod?: string,
    MortgageType?: string,
    Picture?: string,
    PreCheckItemId?: string,
    ProjectTypeId?: string,
    RegisteReason?: string,
    RegisteType?: string,
    RegisterType?: string,
    Remark?: string,
    RequestPersons?: RequestPersons[],
    RightsType?: string,
    SuretyType?: string,
    TypeCode?: string,
    UserName?: string,
}

export interface mortgageInfo {
    BorrowMoney?: any
    BuildAddress?: any
    BuildArea?: any
    BuildNature?: any
    BuildSpaceArea?: any
    EvaluationMoney?: any
    LoanDays?: any
    LoanStart?: any
    LoanType?: any
    Months?: any
    MortgageAddress?: any
    MortgageCardNO?: any
    MortgageCardType?: any
    MortgageDealNo?: any
    MortgageName?: any
    MortgagePhone?: any
    PowerAddress?: any
    PowerName?: any
    PowerPhone?: any
    SuccessMoney?: any
}

/**
 * 提交表单
 */
export interface company {
    companyId: string
}
 