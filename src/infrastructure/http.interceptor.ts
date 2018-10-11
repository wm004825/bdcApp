import { UserInfo } from './user.info';
import { PublicFunction } from './../public/public.function';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from "@angular/common/http";
import { Injectable, Inject } from "@angular/core";
import { Observable } from 'rxjs/Rx';
import { tap } from 'rxjs/operators';
import { API_URL } from './host.address';
/**
 * 通用
 */
@Injectable()
export class HttpInterceptorServe implements HttpInterceptor {
  constructor(@Inject(API_URL) private apiUrl,private userInfo:UserInfo, private publicFunction: PublicFunction) {
  }

  /**
   * http 的请求数。用来防止loading 闪屏
   */
  private requestCount: number = 0;

  /**
   * 减去请求次数或者关闭loading
   */
  private deductRequestCount() {
    this.requestCount--;
    if (this.requestCount <= 0) {
      this.publicFunction.endLoading();
    }
  }



  /**
    * 序列化请求参数
    * @param obj 请求参数
    */
  private param(obj) {
    let query = '', name, value, fullSubName, subName, subValue, innerObj, i;
    for (name in obj) {
      if (obj.hasOwnProperty(name)) {
        value = obj[name];
        if (value instanceof Array) {
          for (i = 0; i < value.length; ++i) {
            subValue = value[i];
            fullSubName = name + '[' + i + ']';
            innerObj = {};
            innerObj[fullSubName] = subValue;
            query += this.param(innerObj) + '&';
          }
        } else if (value instanceof Object) {
          for (subName in value) {
            if (value.hasOwnProperty(subName)) {
              subValue = value[subName];
              fullSubName = name + '[' + subName + ']';
              innerObj = {};
              innerObj[fullSubName] = subValue;
              query += this.param(innerObj) + '&';
            }
          }
        } else if (value !== undefined && value !== null) {
          query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
        }
      }
    }
    return query.length ? query.substr(0, query.length - 1) : query;
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authHeader = 'bearer ' + this.userInfo.GetToken();
    const authReq = req.clone({
      headers: req.headers.set('Authorization', authHeader).set('Content-Type', 'application/x-www-form-urlencoded'),
      url: this.apiUrl + req.url,
      body: this.param(req.body)
    });
    if (this.requestCount <= 0) {
      this.publicFunction.goLoading();
    }
    this.requestCount++;
    return next.handle(authReq).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          this.deductRequestCount();
        }
      },
        error => {
          this.deductRequestCount();
        })
    );
  }
}
