import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NavtoolsComponent }  from './navtools.component';
import { NavbarComponent }  from './navbar.component';
import { DashboardComponent }  from './dashboard.component';
import { AtelierComponent }  from './atelier.component';

import { AppRoutingModule }     from './app-routing.module';

import { NavtoolsModule }       from './navtools.module';

@NgModule({
  imports:      [ BrowserModule,
  				  AppRoutingModule,
  				  NavtoolsModule ],
  declarations: [ AppComponent,
  				  AtelierComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
