/**
 * 查档的变量
 */
export const CurrencyString = {
    /**
     * 公开档查询
     */
    gkdcxName: '公开档查询',

    /**
     * 名下档查询
     */
    mxdcxName: '名下档查询',

    /**
     * 个人档查询
     */
    grdcxName: '个人档查询',

    /**
     * 家庭档查询
     */
    jtdcxName: '家庭档查询',

    /**
     * 不动产权证
     */
    bdcqzName: '不动产权证',

    /**
     * 邕房权证
     */
    yfqzName: '邕房权证',

    /**
     * 其他
     */
    qtName: '其他',

    /**
     * 邕房预字
     */
    yfyzName: '邕房预字',

    /**
     * 邕房他字
     */
    yftzName: '邕房他字',

    /**
     * 南宁市不动产权
     */
    nnsbdcqzName: '南宁市不动产权',

    /**
     * 南宁市不动产证明
     */
    nnsbdczmName: '南宁市不动产证明',

    /**
     * 查询公开档
     */
    cxgkdName: '查询公开档',

    /**
     * 查询名下档
     */
    cxmxdName: '查询名下档',

    /**
     * 查询家庭档
     */
    cxjtdName: '查询家庭档',

    /**
     * 查询家庭成员
     */
    cxjtcyName: '查询家庭成员',

    /**
     * 查询机构档
     */
    cxjgdName: '查询机构档',

    /**
     * 查询本人
     */
    cxbrName: '查询本人',

    /**
     * 查档记录 
     */
    cdjlName: '查档记录 ',

    /**
     * 邕房权证字
     */
    yfqzzName: '邕房权证字',

    /**
     * 查验查档
     */
    cycdName:'查验查档',

    /**
     * 查档曾用名的数量
     */
    beforeNameLength: 10,

}

export const QueryString = {
    /**
    * 个人查档选项卡切换
    */
    queryinformationPet: CurrencyString.mxdcxName,

    /**
     * 机构查档选项卡切换
     */
    queryOtherInformationPet: CurrencyString.gkdcxName,
}

/**
 * 机构查档的二级数据
 */
export const QueryotherinformationData:QueryinformationEntity = {
    index: 0,
    list: [
        {
            Key: '1',
            Value: CurrencyString.bdcqzName,
            selectData: {
                index: 0,
                list: [
                    { Key: '1', Value: CurrencyString.nnsbdcqzName, limit: 7 },
                    { Key: '2', Value: CurrencyString.nnsbdczmName, limit: 7 },
                ],
                value: ''
            },

            /**
             * 年份
             */
            no: '',

            /**
             * 号码
             */
            code: '',


            /**
             * 最终拼接成的字符串
             */
            txt: '',


        },
        {
            Key: '2', Value: CurrencyString.yfqzName, selectData: {
                index: 0,
                list: [
                    { Key: '1', Value: CurrencyString.yfyzName, limit: 7 },
                    { Key: '2', Value: CurrencyString.yftzName, limit: 6 },
                ],
                value: ''
            },

            /**
             * 年份
             */
            no: '',

            /**
            * 最终拼接成的字符串
            */
            txt: '',
        },
        {
            Key: '3', Value: CurrencyString.qtName,
            /**
            * 最终拼接成的字符串
            */
            txt: '',
        },
    ],
    value: ''
}

/**
 * 个人查档的二级数据
 */
export const QueryinformationData:QueryinformationEntity = {
    index: 0,
    list: [
        {
            Key: '1',
            Value: CurrencyString.bdcqzName,
            selectData: {
                index: 0,
                list: [
                    { Key: '1', Value: CurrencyString.nnsbdcqzName, limit: 7 },
                    { Key: '2', Value: CurrencyString.nnsbdczmName, limit: 7 },
                ],
                value: ''
            },

            /**
             * 年份
             */
            no: '',

            /**
             * 号码
             */
            code: '',


            /**
             * 最终拼接成的字符串
             */
            txt: '',


        },
        {
            Key: '2', Value: CurrencyString.yfqzName, selectData: {
                index: 0,
                list: [
                    { Key: '1', Value: CurrencyString.yfqzzName, limit: 8 },
                    { Key: '2', Value: CurrencyString.yfyzName, limit: 7 },
                ],
                value: ''
            },

            /**
             * 年份
             */
            no: '',

            /**
            * 最终拼接成的字符串
            */
            txt: '',
        },
        {
            Key: '3', Value: CurrencyString.qtName,
            /**
            * 最终拼接成的字符串
            */
            txt: '',
        },
    ],
    value: ''
} 

export interface QueryinformationEntity {
    index: number,
    list: QueryinformationListEntity[],
    value: string,
}

export interface QueryinformationListEntity {
    Key: string;
    Value: string,
    selectData?: QuerySelectData,

    /**
     * 年份
     */
    no?: string,

    /**
     * 号码
     */
    code?: string,

    /**
     * 最终的字符串
     */
    txt: string,
}

export interface QuerySelectData {
    index: number,
    list: QueryinformationListSelectEntity[],
    value: string,
}
export interface QueryinformationListSelectEntity {
    Key: string,
    Value: string,

    /**
     * 限制的输入字符
     */
    limit: number,
}

