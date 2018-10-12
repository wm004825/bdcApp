import { NgModule } from '@angular/core';
import { InputlimitDirective } from './inputlimit/inputlimit';
import { DefaultimageDirective } from './defaultimage/defaultimage';
@NgModule({
    declarations: [InputlimitDirective,
        DefaultimageDirective],
    imports: [],
    exports: [InputlimitDirective,
        DefaultimageDirective]
})
export class DirectivesModule { }
