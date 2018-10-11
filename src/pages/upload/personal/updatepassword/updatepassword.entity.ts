
/**
 *  修改密码的短信验证码
 */
export interface updatePasswordCodeEntity {
    Mobile: string
}

/**
 * 修改密码的参数
 */
export interface updatePasswordEntity {
    Mobile: string,
    Code: string,
    Password: string,
    ConfirmPassword: string
}
