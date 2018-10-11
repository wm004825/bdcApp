/**
 * 获取注册验证码的参数
 */
export interface codeEntity {
    /**
     * 手机号
     */
    phone: string;
    /**
     * 是否为注册
     */
    isRegister: boolean
}

export interface registerModel {
    /**
     * 姓名
     */
    userName: string,
    /**
     * 身份证
     */
    personNo: string,
    /**
     * 手机号
     */
    phoneNumber: string,
    /**
     * 密码
     */
    passWord: string,
    /**
     * 确认密码
     */
    conFirmPassWord: string,
    /**
     * 验证码
     */
    validCode: string 
}