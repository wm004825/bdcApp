import { ApiResult } from './../../../../infrastructure/api.result';
import { selectData } from '../../../../public/public.entity';
export const d1Type: commonType = {
    selectData: {
        index: 0,
        list: [
            { Key: '1', Value: '不动产权证', },
            { Key: '2', Value: '邕房权证' }
        ],
        value: '',
    },
    no: '',
    code: '',
    houseno: '',
    typecode: 'b1-1'
}
export const b3Type: commonType = {
    selectData: {
        index: 0,
        list: [
            { Key: '1', Value: '不动产证明', },
            { Key: '2', Value: '邕房他字第', },
            { Key: '3', Value: '邕房预字第', }
        ],
        value: '',
    },
    no: '',
    code: '',
    houseno: '',
    typecode: 'b3-1'
}

export const b5Type: commonType = {
    selectData: {
        index: 0,
        list: [
            { Key: '1', Value: '不动产证明', },
            { Key: '2', Value: '邕房他字第', },
            { Key: '3', Value: '邕房预字第', }
        ],
        value: '',
    },
    no: '',
    code: '',
    houseno: '',
    typecode: 'b5'
}

export const d4Type: commonType = {
    selectData: {
        index: 0,
        list: [
            { Key: '1', Value: '不动产证明', },
            { Key: '2', Value: '邕房预', }
        ],
        value: '',
    },
    no: '',
    code: '',
    houseno: '',
    typecode: 'd4-1'
}
export const b2Type: b2Type = {
    pet: '首次调查',
    tab: [
        { name: '首次调查' },
        { name: '权籍调查' }
    ],
    houseno:'',
    houseowner:'',
    typecode:'b2'
}



/**
 * 通用的业务类型 entity
 */
export interface commonType extends commonTypeEntity {

    /**
     * 证书类型
     */
    selectData?: selectData,

    /**
     * 年份
     */
    no?: string,

    /**
     * 号码
     */
    code?: string,

    /**
     * 备案企业
     */
    company?: selectData,
}

/**
 * b2业务类型的entity
 */
export interface b2Type extends commonTypeEntity {
    /**
    * 义务人证件号的select 
    */
    company?: selectData,

    /**
     * 当前焦点
     */
    pet: string,

    /**
     * 切换的数组
     */
    tab: tabEntity[]
}

/**
 * 切换的数组的entity
 */
export interface tabEntity {
    name: string
}



/**
 * 提交的数据的业务类型的entity
 */
export interface commonTypeEntity {
    /**
    * 最终拼凑的字符串
    */
    houseno?: string,

    /**
     * 权利人
     */
    houseowner?: string,

    /**
     * 业务类型
     */
    typecode?: string,

    /**
     * 备案企业
     */
    companyId?: string,
}
 

export interface ApiResultUserInfo<handleUserInfo> extends ApiResult<{}>{
    Data?:handleUserInfo
}

export interface handleUserInfo{
    CurrentMortgageInfo?:string,
    ErroMessage?:string,
    HouseAddress?:string,
    HouseArea?:string,
    HouseNo?:string,
    HousePaperNo?:string,
    Id?:string,
    Owners:handleOwners[],
    ParcelCert:string,
    SalesInfo:string,
    Success:boolean, 
}

export interface handleOwners{
    CertNo?:string,
    IDType?:string,
    Keeper?:boolean, 
    MobileNo?:string,
    Name?:string,
    OwnerType?:string,
    PersonNo?:string,
    RoleName?:string, 
    ShareType?:string,
    PaperName?:string,
    Address?:string,
}