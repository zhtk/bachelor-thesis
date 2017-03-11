import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NavtoolsComponent }  from './navtools.component';
import { NavbarComponent }  from './navbar.component';
import { DashboardComponent }  from './dashboard.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,
  				  NavtoolsComponent,
  				  DashboardComponent,
  				  NavbarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
