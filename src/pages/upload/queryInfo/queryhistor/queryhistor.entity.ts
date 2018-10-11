import { pageEntity, dropDown } from './../../../../public/public.entity';

/**
 * 查询个人档和机构档的公开档请求参数
 */
export interface openArchivalEntity extends pageEntity {
    /**
    * false是个人档  true是机构档
    */
    isOrganization?: boolean,

    /**
     * 身份证号
     */
    personNo?: string,
}

/**
 * 列表参数
 */
export interface queryhistorList extends dropDown {
    /**
     * 接收serve 的回调参数
     */
    url: any,

    /**
     * 显示历史记录
     */
    historyType: boolean,

    /**
     * false是个人档  true是机构档
     */
    isOrganization?: boolean,


    /**
     * 请求的参数
     */
    pageEntity: openArchivalEntity,

    /**
     * 数据
     */
    list: any,

    /**
     * 父类名称
     */
    name:string,
} 