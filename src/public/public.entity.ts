/**
 * 页码的Model
 */
export interface pageEntity {
    /**
     * 页数
     */
    page: number,

    /**
     * 数量
     */
    pagesize: number,
}

/**
 * 上拉刷新下拉加载的Model
 */
export interface dropDown {
    /**
     * 下拉的对象
     * 如果关闭下拉加载，上拉刷新页面时重新开启
     */
    downData: any;

    /**
     * 下拉加载的判断
     */
    downType: boolean;
}

export interface anyArrya {
    data: any;
}

/**
 * 验证码的参数
 */
export interface verificationCodeEntity {
    /**
     * 提示文字
     */
    verifyCodeTips: string,

    /**
     * 时间
     */
    countDown: number,

    /**
     * 点击后置灰
     */
    disable: boolean,
}


/**
 * select 格式
 */
export interface selectData {

    /**
     * 索引
     */
    index: number,

    /**
     * select 的数据
     */
    list:arrayList[],

    /**
     * 返回的数据格式
     */
    value: string
}

export interface arrayList{
    Key: string, 
    Value: string
}

export interface Alert{
    message:string,
    title?:string,
    buttonLeftTxt?:string,
    buttonRightTxt?:string,
    leftFunction?:Function,
    rightFunction?:Function,
}

export const alertEntity:Alert = {
    message:'温馨提示',
    title:'温馨提示',
    buttonLeftTxt:'取消',
    buttonRightTxt:'确定',
    leftFunction:()=>{},
    rightFunction:()=>{},
}