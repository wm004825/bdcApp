/**
 * 全局管理API
 */
export const ApiUrl = {
    /**
     * 用户登陆
     */
    login: '/token',

    /**
    * 新闻列表
    */
    getNewsList: '/api/bdcappdata/GetNewsList',

    /**
     * 注册获取短信验证码
     */
    sendMobileValidCode: '/api/security/SendMobileValidCode',

    /**
     * 用户注册
     */
    registerModel: '/api/account/RegisterModel',

    /**
     * 修改密码短信验证码
     */
    forgotPassword: '/api/account/ForgotPassword',

    /**
     * 重置密码
     */
    resetPassword: '/api/Account/ResetPassword',


    /**
     * 个人查档->查询个人档
     */
    personUploadSave: '/api/appointment/PersonUploadSave',

    /**
     * 个人查档->查询家庭成员
     */
    familyUploadSave: '/api/appointment/FamilyUploadSave',

    /**
     * 个人档->查询公开档记录
     */
    getOpenArchivalList: '/api/appointment/getOpenArchivalList',

    /**
     * 个人档->查询名下档和家庭档记录
     */
    getPersonArchivalList: '/api/appointment/GetPersonArchivalList',

    /**
     * 机构查档->个人档记录
     */
    getPersonOrganization: '/api/appointment/GetPersonOrganization',
    
    /**
     * 机构查档->公开档案
     */
    personArchivalQuery:'api/appointment/PersonArchivalQuery',

    /**
     * 机构查档->备案企业
     */
    getCompanies: '/api/appointment/GetCompanies',

    /**
     * 匿名查档->查询个人档
     */
    personUploadSaveAnonymous: '/api/appointment/PersonUploadSaveAnonymous',

    /**
     * 匿名查档->名下档记录
     */
    getPersonsAnonymous: '/api/appointment/GetPersonsAnonymous',

    /**
     * 匿名查档->家庭档记录
     */
    getFamilysAnonymous: '/api/appointment/GetFamilysAnonymous',

    /**
     * 查验查档->查询记录
     */
    getCodePage: '/api/appointment/GetCodePage',

    /**
     * 查档详情
     */
    getHtmlContentResultByIdentityCode:'/api/appointment/GetHtmlContentResultByIdentityCode',

    /**
     * 相关部门
     */
    getIntroduction: '/api/bdcappdata/GetIntroduction',
    /**
     * 部门详情
     */
    getIInfo: '/api/BdcAppData/GetIInfo',

    /**
     * 业务指南
     */
    getGuide: '/api/BdcAppData/GetGuide',

    /**
     * 业务指南列表
     */
    getGuideSonList: '/api/BdcAppData/GetGuideSonList',

    /**
     * 业务指南详情
     */
    getGuideSon: '/api/bdcappdata/GetGuideSon',

    /**
     * 业务办理的列表
     */
    getProjectTypeList: '/api/appointment/GetProjectTypeList',

    /**
     * 业务办理获取备案企业
     */
    getCompanyNames: '/api/appointment/GetCompanyNames',

    /**
     * 业务办理的校验接口
     */
    checkhouseinfo: '/api/appointment/checkhouseinfo',


    /**
     * 业务办理的权利人接口
     */
    getCompanyInfo:'/api/appointment/GetCompanyInfo',

    /**
     * 业务办理的表单（我也不知道干嘛的）
     */
    getEmptyBaseInfo:'/api/appointment/GetEmptyBaseInfo',

    /**
     * 提交表单
     */
    createBusinessToMongo:'/api/appointment/CreateBusinessToMongo',

    /**
     * 我的业务
     */
    getMyList:'/api/appointment/GetMyList',

    /**
     * 我的业务->未提交业务列表
     */
    getBusinessListFromMongo:'/api/appointment/GetBusinessListFromMongo',

    /**
     *  删除未提交列表
     */
    delBusinessForId:'/api/appointment/DelBusinessForId',
    
}