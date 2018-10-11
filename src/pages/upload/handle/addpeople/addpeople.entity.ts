import { RequestPersons } from './../onlinepretrialdetails/onlinepretrialdetails.entity'; 
import { selectData } from "../../../../public/public.entity";

export interface addpeopleEntity {
    /**
     * 共有方式
     */
    shareType?: selectData,

    /**
    * 证件类型
    */
    idType?: selectData,

    /**
    * 类型
    */
    personType?: selectData,
    
    /**
     * 传入的权利人还是义务人
     */
    RoleName?:string,

    /**
     * 传入的权利人和义务人
     */
    RequestPersons?:RequestPersons[],

    /**
     * 判断是添加还是修改
     */
    type:string,

    /**
     * 传入权利人义务人数组的下标
     */
    index?:number,
}