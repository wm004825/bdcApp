/**
 * 通用的模版信息
 */
export const PublicValidation = {
    userName: {
        required: '用户名不能为空',
        ForRegExpValidator: '用户名格式不正确',
    },
    personNo: {
        required: '身份证号不能为空',
        ForRegExpValidator: '身份证号为18个字符'
    },
    passWord: {
        required: '密码不能为空',
        minlength: '密码不能小于6个字符'
    },

    phoneNumber: {
        required: '手机号不能为空',
        ForRegExpValidator: '手机格式不正确',
        maxlength: '手机号只能11位'
    },
    isCheck: {
        required: '请同意协议',
    },
    validCode: {
        required: '验证码不能为空',
    }, 
    conFirmPassWord: {
        required: '密码不能为空',
        minlength: '密码不能小于6个字符', 
        match:'密码不一致',
    },
};