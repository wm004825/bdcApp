import { Injectable } from '@angular/core';

/**
 * 在线办理和网上预审的通用方法
 */
@Injectable()
export class HandleFunction {
    constructor() {

    }

    /**
     * 筛选相同名字的数组
     * @param arrayList 数组
     */
    screenList(arrayList: Array<any>): Array<any> {
        let onlinehandlingTypeList = []
        arrayList.forEach(ele => {
            let type = onlinehandlingTypeList.filter(e => {
                return e.ProjectTag == ele.ProjectTag
            });
            if (onlinehandlingTypeList.length == 0) {
                onlinehandlingTypeList.push(ele);
            } else if (type.length == 0) {
                onlinehandlingTypeList.push(ele);
            }
        });
        return onlinehandlingTypeList;
    }
}