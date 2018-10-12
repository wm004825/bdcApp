
import { QueryForm } from '../pages/upload/queryInfo/currency/query.form';

import { AppService } from './../infrastructure/app.serve';

import { DirectivesModule } from './../directives/directives.module';
import { UserInfo } from './../infrastructure/user.info';
import { PublicServe } from './../public/public.serve';
import { PublicFunction } from './../public/public.function';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
/** http拦截器和页面拦截器start */
import { HttpInterceptorServe } from './../infrastructure/http.interceptor';
/** http拦截器和页面拦截器end */
import { PipesModule } from '../pipes/pipes.module';
import { API_URL } from './../infrastructure/host.address';
import { ComponentsModule } from './../components/components.module'; 

/*** 页面模块start */
import { LoginPage } from './../pages/upload/personal/login/login';
import { HomePageModel } from './../pages/home/home.model';
import { AboutPageModel } from './../pages/about/about.model';
import { LoginPageModule } from './../pages/upload/personal/login/login.module';
import { ContactPageModel } from './../pages/contact/contact.model';
import { RegisterPageModule } from './../pages/upload/personal/register/register.module';
import { ProtocolModelPageModule } from './../pages/upload/personal/protocol-model/protocol-model.module';
import { UpdatepasswordPageModule } from './../pages/upload/personal/updatepassword/updatepassword.module';
import { QueryinformationPageModule } from './../pages/upload/queryInfo/queryinformation/queryinformation.module';
import { QueryotherinformationPageModule } from './../pages/upload/queryInfo/queryotherinformation/queryotherinformation.module';
import { QueryhistorPageModule } from './../pages/upload/queryInfo/queryhistor/queryhistor.module';
import { QueryanonymousationPageModule } from './../pages/upload/queryInfo/queryanonymousation/queryanonymousation.module';
import { QuerycheckationPageModule } from './../pages/upload/queryInfo/querycheckation/querycheckation.module';
import { QuerydetailsPageModule } from './../pages/upload/queryInfo/querydetails/querydetails.module';
import { RelevantdepartmentsPageModule } from './../pages/upload/newdetails/relevantdepartments/relevantdepartments.module';
import { DepartmentdetailsPageModule } from './../pages/upload/newdetails/departmentdetails/departmentdetails.module';
import { GuidePageModule } from './../pages/upload/newdetails/guide/guide.module';
import { GuidelistPageModule } from '../pages/upload/newdetails/guidelist/guidelist.module';
import { GuidedetailsPageModule } from './../pages/upload/newdetails/guidedetails/guidedetails.module';
import { OnlinehandlingPageModule } from './../pages/upload/handle/onlinehandling/onlinehandling.module';
import { OnlinepretriallistPageModule } from './../pages/upload/handle/onlinepretriallist/onlinepretriallist.module';
import { OnlinepretrialdetailsPageModule } from './../pages/upload/handle/onlinepretrialdetails/onlinepretrialdetails.module';
import { OnlineverificationPageModule } from './../pages/upload/handle/onlineverification/onlineverification.module';
import { AddpeoplePageModule } from './../pages/upload/handle/addpeople/addpeople.module';
import { MylistPageModule } from './../pages/upload/business/mylist/mylist.module';
import { UnsubmittedPageModule } from './../pages/upload/business/unsubmitted/unsubmitted.module';

/*** 页面模块end */



@NgModule({
  declarations: [
    MyApp,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  
    HomePageModel,
    AboutPageModel,
    ContactPageModel,
    LoginPageModule,
    RegisterPageModule,
    ProtocolModelPageModule,
    UpdatepasswordPageModule,
    QueryinformationPageModule,
    QueryotherinformationPageModule,
    QueryhistorPageModule,
    QueryanonymousationPageModule,
    QuerycheckationPageModule,
    QuerydetailsPageModule,
    RelevantdepartmentsPageModule,
    DepartmentdetailsPageModule,
    GuidePageModule,
    GuidelistPageModule,
    GuidedetailsPageModule,
    OnlinehandlingPageModule,
    OnlinepretriallistPageModule,
    OnlinepretrialdetailsPageModule,
    OnlineverificationPageModule,
    AddpeoplePageModule,
    MylistPageModule,
    UnsubmittedPageModule, 
    IonicModule.forRoot(MyApp, {
      backButtonText: '返回', iconMode: 'ios',//安卓icon强制使用ios的icon以及样式
      mode: 'ios',//样式强制使用ios样式
      tabsHideOnSubPages: true,    //导航页覆盖底下tab 
      backButtonIcon: 'ios-arrow-back'
    }, {
        /**
         * 路由跳转
         */
        links: [
          { component: LoginPage, name: 'login', segment: 'login' },
        ]
      }),
    DirectivesModule,
    ComponentsModule,
    PipesModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
  ],
  providers: [
    UserInfo,
    PublicFunction,
    PublicServe,
    StatusBar,
    SplashScreen,
    AppService,
    QueryForm, 
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    {
      provide: API_URL,
      // useValue: 'https://test.nngeo.com/'
      useValue: 'http://practice.nngeo.com/'
    },
    [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpInterceptorServe,
        multi: true
      },
    ],
  ]
})
export class AppModule {
}
