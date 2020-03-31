import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {APP_BASE_HREF} from "@angular/common";
import {RouterModule} from "@angular/router";

import { HttpClientModule } from "@angular/common/http";
import { HomeListComponent } from "./home-list/home-list.component";
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { FrameworkComponent } from './framework/framework.component';

@NgModule({
  declarations: [HomeListComponent, AboutComponent, HomepageComponent, HeaderComponent, FrameworkComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot([
    {
      path: '',
      component: HomepageComponent
    },
    {
      path: 'about',
      component: AboutComponent
    }
  ])],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '/'
  }],
  bootstrap: [ FrameworkComponent ]
})
export class AppModule {}
