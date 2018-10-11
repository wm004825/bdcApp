import { selectData } from "../../../../public/public.entity";

/**
 * 在线办理和网上预审的的变量。不用老是每次点击就请求一次。
 * 上拉刷新控制刷新
 */
export const handleData = {

    /**
     * 在线办理和网上预审的的变量
     */
    handle: [],

    /**
     * 在线办理的列表
     */
    onlinehandling: [],

    /**
     * 网上预审的列表
     */
    onlinepretrial: [],

    /**
     * 在线办理的一级名字
     */
    onlinehandlingTypeList: [],


    /**
     * 网上预审的一级名字
     */
    onlinepretrialTypeList: [],

    /**
     * 当前的列表 不用在2级列表判断
     */
    current: {
        title: '',
        name: '',
        typeList: [],
        List: [],
    }
}

/**
 * 在线办理和网上预审的entity
 */
export interface handleEntity {

    /**
     * 名称 比如在线办理或网上预审
     */
    name: string,

    /**
     * 办理的业务类型名称 比如预告类
     */
    title: string,

    /**
     * 内容
     */
    data?: any,

    /**
     * 办理的业务 比如 预告类下的 预购商品房抵押权首次预告登记
     */
    projectName?: string,
}

/**
 * 贷款类别
 */
export const loanType: selectData = {
    index: 0,
    list: [
        { Key: '1', Value: '商业贷款' },
        { Key: '2', Value: '公积金贷款' },
        { Key: '3', Value: '商业与公积金组合贷款' },
        { Key: '4', Value: '其他' }
    ],
    value: '',
};

/**
 * 持有方式
 */
export const shareType: selectData = {
    index: 0,
    list: [
        { Key: '1', Value: '单独所有' },
        { Key: '2', Value: '共同共有' },
        { Key: '3', Value: '按份共有' }
    ],
    value: '',
};

/**
 * 证件类型
 */
export const idType: selectData = {
    index: 0,
    list: [
        { Key: '1', Value: '身份证' },
        { Key: '2', Value: '组织机构代码证' },
        { Key: '3', Value: '税务登记证' },
        { Key: '4', Value: '统一社会信用代码' }
    ],
    value: '',
};

/**
 * 类型
 */
export const personType: selectData = {
    index: 0,
    list: [
        { Key: '1', Value: '个人' },
        { Key: '2', Value: '企业' },
        { Key: '3', Value: '事业单位' },
        { Key: '4', Value: '国家机关' },
        { Key: '5', Value: '其它' },
    ],
    value: '',
};  

/**
* 获取备案企业的entity
*/
export interface typecodeEntity {
   typecode: string
}