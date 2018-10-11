import { MyListServe } from './mylist.serve';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MylistPage } from './mylist';

@NgModule({
  declarations: [
    MylistPage,
  ],
  imports: [
    IonicPageModule.forChild(MylistPage),
  ],
  providers:[
    MyListServe
  ]
})
export class MylistPageModule {}
