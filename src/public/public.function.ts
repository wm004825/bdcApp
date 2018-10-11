import { Alert, alertEntity } from './public.entity';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import { UserInfo } from './../infrastructure/user.info';
import { Injectable } from '@angular/core';
import { Loading, LoadingController, Toast, ToastController } from "ionic-angular";
import { ActionSheetController, ActionSheetButton, App, AlertController } from 'ionic-angular';
import Rx, { Observable, Observer } from 'rxjs/Rx';

/**
 * 常用的方法
 */
@Injectable()
export class PublicFunction {
    loading: Loading;
    toast: Toast;
    constructor(private loadingCtrl: LoadingController, public alertCtrl: AlertController, public appCtrl: App, private toastController: ToastController, public actionSheetController: ActionSheetController, public userInfo: UserInfo) {

    }

    /**
    * 显示toast
    * @param message 提示信息
    * @param duration 显示时间
    * @param position 显示位置，接受值 "top", "middle", "bottom"
    * @param showCloseButton 是否显示关闭按钮
    */
    public newToast(message: string = '操作完成', duration: number = 3000, position: string = 'middle', showCloseButton: boolean = false) {
        this.toast = this.toastController.create({
            message,
            duration,
            position,
            showCloseButton
        });
        this.toast.present();
    }


    /**
      * 创建单选项卡
      * @param button 按钮的对象 
      * @param title 标题 
      * @returns Observable
      */
    public createSheetButtons<T>(button: ActionSheetButton[], title: string = '请选择下列选项'): Observable<T> {
        const observable: Observable<any> = Rx.Observable.create(observe => {
            const ob = observe as Observer<string>;
            let buttons: ActionSheetButton[] = [];
            button.push({ text: '取消', role: 'destructive' })
            button.forEach((data) => {
                buttons.push(
                    {
                        text: data.text,
                        role: data.role,
                        handler: () => {
                            ob.next(data.text);
                        }
                    }
                )
            })
            let actionSheet = this.actionSheetController.create({
                title: title,
                buttons: buttons
            });
            actionSheet.present();
        });
        return observable;
    }

    /**
     * 创建loading
     * @param name loading 的name
     * @param duration loading 的时间
     */
    goLoading(name: string = '页面正在加载中') {
        this.loading = this.loadingCtrl.create({
            content: name,//数据加载中显示 
        });
        this.loading.present();
    }

    /**
     * 关闭创建loading
     */
    endLoading() {
        this.loading && this.loading.dismiss();
    }

    /**
     * 判断用户是否登录，未登录则跳转login页面
     */
    checkUserIsLogin(): boolean {
        if (!this.userInfo.IsLogin()) {
            setTimeout(() => {
                this.newToast('用户未登陆,跳转到登陆页面', 2500, 'bottom');
                this.appCtrl.getActiveNav().push('login');
            }, 0);
            return false;
        }
        return true;
    }

    /**
     * 校验密码是否一致
     * @param targetField 
     */
    match(targetField: string): ValidatorFn {
        return (self: AbstractControl): { [key: string]: any } => {    //这里严格按照ValidatorFn的声明来
            let _form = self.parent;
            if (_form) {
                let targetControl: AbstractControl = _form.controls[targetField];
                if (targetControl.value && self.value != targetControl.value) {   //如果两个值不一致
                    let _json = { match: '' }
                    _json.match = '密码不一致';
                    return _json
                }
            }
        }
    }
 
     /**
      * 创建alert弹窗
      * @param alert 对象 
      */
    newAlert(alert: Alert) {
        
        //给传入的对象默认值
        this.forParams(alert, alertEntity);
        const prompt = this.alertCtrl.create({
            title: alert.title,
            message: alert.message,
            buttons: [
                {
                    text: alert.buttonLeftTxt,
                    handler: data => {
                        if (alert.leftFunction) alert.leftFunction();
                    }
                },
                {
                    text: alert.buttonRightTxt,
                    handler: data => {
                        if (alert.rightFunction) alert.rightFunction();
                    }
                }
            ]
        });
        prompt.present();
    }

    /**
     * 给传入的对象默认值
     * @param params 传入的对象
     * @param defaults 默认值的对象
     */
    forParams(params: any, defaults: any) {
        for (let def in defaults) {
            if (typeof params[def] === "undefined") {
                params[def] = defaults[def];
            } else if (typeof params[def] === "object") {
                for (let deepDef in defaults[def]) {
                    if (typeof params[def][deepDef] === "undefined") {
                        params[def][deepDef] = defaults[def][deepDef];
                    }
                }
            }
        }
    }
}