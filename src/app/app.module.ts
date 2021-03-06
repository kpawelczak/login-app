import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { LoginModule } from './login/login.module';
import { HeaderComponent } from './header/header.component';


@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		LoginModule,

		RouterModule.forRoot(routes)
	],
	declarations: [
		AppComponent,
		HeaderComponent
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {
}
