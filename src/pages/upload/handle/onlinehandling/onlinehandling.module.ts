import { HandleFunction } from './../currency/handle.function';
import { HandleServe } from './../currency/handle.serve';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OnlinehandlingPage } from './onlinehandling';

@NgModule({
  declarations: [
    OnlinehandlingPage,
  ],
  imports: [
    IonicPageModule.forChild(OnlinehandlingPage),
  ],
  providers:[
    HandleServe,
    HandleFunction
  ]
})
export class OnlinehandlingPageModule {}
