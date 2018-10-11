/**
 * 用户登陆的参数
 */
export interface loginEntity {
    /**
    * 手机号
    */
    username: string;
    /**
     * 密码
     */
    password: string;

    /**
     * 也不知道干嘛的
     */
    grant_type:string;
}