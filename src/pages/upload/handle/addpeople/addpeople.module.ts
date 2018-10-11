import { DirectivesModule } from './../../../../directives/directives.module';
import { ComponentsModule } from './../../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddpeoplePage } from './addpeople';

@NgModule({
  declarations: [
    AddpeoplePage,
  ],
  imports: [
    IonicPageModule.forChild(AddpeoplePage),
    ComponentsModule,
    DirectivesModule 
  ],
  providers:[ 
  ]
})
export class AddpeoplePageModule {}
