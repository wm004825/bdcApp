/**
 * 个人查档->查档的Model
 */
export interface PersonUploadEntity {
    /**
     * 查询本人所需要的参数  PropertyRightNum必须是为'' 因为查询本人和公开档查询用的接口是同一个
     */
    PropertyRightNum: string,
    /**
     * 用户姓名
     */
    personName?: string,
    /**
     * 用户身份证
     */
    personNo?: string,
}

/**
 * 个人查档->家庭档的Model
 */
export interface FamilyUploadEntity {
    values: [
        {
            Key: string,
            Value: string,
            auth?:boolean,
            canDel?:boolean
        }
    ]
}