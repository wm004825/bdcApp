import { DirectivesModule } from './../directives/directives.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VerificationCodeComponent } from './verification-code/verification-code';
import { BeforenameComponent } from './beforename/beforename';
import { TipComponent } from './tip/tip';
import { QuerypublicComponent } from './querypublic/querypublic';
import { HistoryComponent } from './history/history';
import { B3typeComponent } from './handle/b3type/b3type';
import { CommontypeComponent } from './handle/commontype/commontype';
import { B2typeComponent } from './handle/b2type/b2type';
import { D3typeComponent } from './handle/d3type/d3type';
import { C2typeComponent } from './handle/c2type/c2type';
import { I4typeComponent } from './handle/i4type/i4type';
import { NewtipComponent } from './newtip/newtip';
import { PeopleboxComponent } from './handle/peoplebox/peoplebox';  

@NgModule({
  declarations: [VerificationCodeComponent,
    BeforenameComponent,
    TipComponent,
    QuerypublicComponent,
    HistoryComponent,
    B3typeComponent,
    CommontypeComponent,
    B2typeComponent,
    D3typeComponent,
    C2typeComponent,
    I4typeComponent,
    NewtipComponent,
    PeopleboxComponent, 
  ],
  imports: [IonicPageModule.forChild(VerificationCodeComponent), DirectivesModule],
  exports: [VerificationCodeComponent,
    BeforenameComponent,
    TipComponent,
    QuerypublicComponent,
    HistoryComponent,
    B3typeComponent,
    CommontypeComponent,
    B2typeComponent,
    D3typeComponent,
    C2typeComponent,
    I4typeComponent,
    NewtipComponent,
    PeopleboxComponent, 
  ]
})
export class ComponentsModule { }
