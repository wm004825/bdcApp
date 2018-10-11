import { NgModule } from '@angular/core';
import { HtmlPipe } from './html/html';
import { RoleNamePipe } from './role-name/role-name';
@NgModule({
	declarations: [HtmlPipe,
    RoleNamePipe],
	imports: [],
	exports: [HtmlPipe,
    RoleNamePipe]
})
export class PipesModule {}
