import { PublicFunction } from './../public/public.function';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { Subscription } from 'rxjs/Subscription';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;
  message: any;
  subscription: Subscription;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,  public publicFunction: PublicFunction) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
