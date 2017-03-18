import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ServicesComponent } from './micro-services.component';
import { Notify } from './notifications.component';
import { AppComponent }  from './app.component';
import { NavtoolsComponent }  from './navtools.component';
import { NavbarComponent }  from './navbar.component';
import { DashboardComponent }  from './dashboard.component';
import { HomeComponent }  from './home.component';
import { AtelierComponent }  from './atelier.component';
import { MessagesComponent } from './messages.component';

import { AppRoutingModule }     from './app-routing.module';

import { NavtoolsModule }       from './navtools.module';
import { MeetingComponent, KolejkaComponent, UmowComponent }       from './meeting-component';

@NgModule({
  imports:      [ BrowserModule,
  				  AppRoutingModule,
					HttpModule,
    				JsonpModule, FormsModule 
  				   ],
  declarations: [ AppComponent,
  				  HomeComponent,
  				  AtelierComponent,
  				  DashboardComponent,
  				  NavbarComponent,
  				  MessagesComponent,
					Notify,
					ServicesComponent,
					MeetingComponent,
					KolejkaComponent, 
					UmowComponent
				],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
