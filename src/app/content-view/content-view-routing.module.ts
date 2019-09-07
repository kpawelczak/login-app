import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ContentViewComponent } from './content-view.component';


const routes = [{
	path: '',
	component: ContentViewComponent
}];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule
	]
})
export class ContentViewRoutingModule {
}
