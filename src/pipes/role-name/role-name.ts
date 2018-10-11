import { RequestPersonsEntity } from './../../pages/upload/business/unsubmitted/unsubmitted.entity';

import { Pipe, PipeTransform } from '@angular/core';

/**
 * 判断义务人的管道
 */
@Pipe({
  name: 'roleName',
})
export class RoleNamePipe implements PipeTransform {
  
  /**
   * 义务人的管道
   * @param value 权力人和义务人的数组 
   */
  transform(value: RequestPersonsEntity[], ...args) {  
    let RequestPersons:RequestPersonsEntity[] = [];
    value.forEach(element => {
      if(element.RoleName == '义务人'){
        RequestPersons.push(element);
      }
    }); 
    return RequestPersons;
  }
}
