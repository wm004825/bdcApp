import { RegularExpression } from '../../../../infrastructure/regular-expression';
import { UserInfo } from '../../../../infrastructure/user.info';
import { FormBuilder, Validators, FormGroup, FormArray, } from "@angular/forms";
import { Injectable } from '@angular/core';
import { forRegExpValidator, allFrom } from '../../../../public/Independent.function';
import { PublicValidation } from '../../../../public/public.validation';

@Injectable()
export class QueryForm {

    constructor(private fb: FormBuilder, private userInfo: UserInfo) {

    }
    /**
   * 表单错误信息
   */
    formErrors = {
        userName: '',
        personNo: ''
    };

    /**
     * 错误信息模版
     */
    validationMessages = {
        userName: PublicValidation.userName,
        personNo: PublicValidation.personNo,
    };
    array: any;

    /**
     * 创建个人档的from
     * @param form 返回from 表单
     * @param index  用来判断是否注册值进去
     */

    createInfoForm(form: FormGroup, index: number = 0) {
        let userName = index == 0 ? this.userInfo.GetPersonName() : '';
        let personNo = index == 0 ? this.userInfo.GetPersonNo() : '';
        form = new FormGroup({
            data: new FormArray([
                this.fb.group({
                    personNo: [personNo, [Validators.required, forRegExpValidator(RegularExpression.matchIDCard, 'personNo')]],
                    userName: [userName, [Validators.required, Validators.minLength(2), Validators.maxLength(12)]],
                    arr: this.fb.array([
                        this.fb.group({
                            name: [''],
                            isAdd: [false],
                        }),
                    ]),
                }),
            ]),
        });
        this.array = form.controls.data;
        allFrom(this.array.controls[0], this.formErrors, this.validationMessages);
        return form;
    }
    // createInfoForm(form: FormGroup, index: number = 0) {
    //     return this.fb.group({
    //         data: this.fb.array([this.createFormData(index)])
    //     });
    // }

    /**
     * 创建个人档列表
     * @param index 用来判断是否注册值进去
     */
    // createFormData(index: number) {
    //     let userName = index == 0 ? this.userInfo.GetPersonName() : '';
    //     let personNo = index == 0 ? this.userInfo.GetPersonNo() : '';
    //     return this.fb.group({
    //         personNo: [personNo, [Validators.required, forRegExpValidator(RegularExpression.matchIDCard, 'personNo')]],
    //         userName: [userName, [Validators.required, Validators.minLength(2), Validators.maxLength(12)]],
    //         arr: this.fb.array([this.createFormName()]), // formarray
    //     });
    // }

    /**
     * 创建家庭档的model
     * @param form 返回from 表单
     * @param index  用来判断是否注册值进去
     */
    createFamilyForm(form: FormGroup, index: number = 0) {
        return this.fb.group({
            data: this.fb.array([this.createFormFamilyData(index)])
        });
    }

    /**
     * 创建家庭档的列表
     * @param index 用来判断是否注册值进去
     */
    createFormFamilyData(index: number) {
        let userName = index == 0 ? this.userInfo.GetPersonName() : '';
        let personNo = index == 0 ? this.userInfo.GetPersonNo() : '';
        return this.fb.group({
            personNo: [personNo, [Validators.required, forRegExpValidator(RegularExpression.matchIDCard, 'personNo')]],
            userName: [userName, [Validators.required, Validators.minLength(2), Validators.maxLength(12)]],
            arr: this.fb.array([this.createFormName()]),
            auth: [false, Validators.requiredTrue],
        });
    }

    /**
     * 曾用名的列表
     */
    createFormName() {
        return this.fb.group({
            name: ['', [Validators.minLength(2), Validators.maxLength(12)]],
            isAdd: [false, Validators.requiredTrue],
        });
    }

}