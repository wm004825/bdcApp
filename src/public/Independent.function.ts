import { ValidatorFn, AbstractControl, FormGroup } from '@angular/forms';
/**
 * 独立的方法
 */
 
/**
 * 正则表达式验证
 * @param nameRe 
 * @param properyName 
 */
export function forRegExpValidator(nameRe: RegExp, properyName: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        const res = !control.value || nameRe.test(control.value);
        const errorObj = { ForRegExpValidator: !res };
        errorObj[properyName] = { value: control.value };
        return res ? null : errorObj;
    };
} 
 


/**
 * 表单值改变处理错误信息方法
 * @param RegisterForm
 * @param formErrors
 */
export function onInputValueChanged(RegisterForm: FormGroup, formErrors: any, validationMessages: any) {
    if (!RegisterForm) {
        return;
    }
    const form = RegisterForm;
    for (const field in formErrors) {
        if (formErrors.hasOwnProperty(field)) {
            formErrors[field] = '';
            const control = form.get(field);
            if (control && control.dirty && !control.valid) {
                const message = validationMessages[field];
                for (const key in control.errors) {
                    if (control.errors.hasOwnProperty(key) && message[key]) {
                        formErrors[field] += message[key];
                    }
                }
            }
        }
    }
}
/**
 * 日期解析，字符串转日期 
 * @param dateString 可以为2017-02-16，2017/02/16，2017.02.16 
 * @returns {Date} 返回对应的日期对象 
 */
export function dateParse(dateString: string): Date {
    var SEPARATOR_BAR = "-";
    var SEPARATOR_SLASH = "/";
    var SEPARATOR_DOT = ".";
    var dateArray;
    if (dateString.indexOf(SEPARATOR_BAR) > -1) {
        dateArray = dateString.split(SEPARATOR_BAR);
    } else if (dateString.indexOf(SEPARATOR_SLASH) > -1) {
        dateArray = dateString.split(SEPARATOR_SLASH);
    } else {
        dateArray = dateString.split(SEPARATOR_DOT);
    }
    return new Date(dateArray[0], dateArray[1] - 1, dateArray[2]);
}

/**
* 比较日期 参数为string或者date类型
* @param date1 string 或者data 类型的参数
* @param date2 string 或者data 类型的参数
* @returns 大于返回1 等于返回0 其他返回-1
*/
export function comopareDate(date1: any, date2: any): number {
    /**
     * 如果是date类型就直接比较，如果不是就转成string
     */
    let comparedate1: Date = typeof (date1) == 'string' ? this.dateParse(date1.toString()) : date1;
    let comparedate2: Date = typeof (date2) == 'string' ? this.dateParse(date2.toString()) : date2;
    if (comparedate1.getTime() > comparedate2.getTime()) {
        return 1;
    } else if (comparedate1.getTime() == comparedate2.getTime()) {
        return 0;
    } else {
        return -1;
    }
}
/**
 * form 校验
 * @param form form 对象
 * @param formErrors 错误信息对象 
 * @param validationMessages  错误信息模板对象
 */
export function allFrom(form: FormGroup, formErrors: any, validationMessages: any) {
    form.valueChanges.subscribe(data => {
        onInputValueChanged(form, formErrors, validationMessages)
    });
    onInputValueChanged(form, formErrors, validationMessages)
}  