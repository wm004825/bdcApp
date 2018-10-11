import { AboutPage } from './about';
import { ComponentsModule } from './../../components/components.module';

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
@NgModule({
    declarations: [
        AboutPage,
    ],
    imports: [
        IonicPageModule.forChild(AboutPage),
        ComponentsModule
    ],
    providers: [
    ]
})
export class AboutPageModel { }
