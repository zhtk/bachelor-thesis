import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AppComponent }  from './app.component';

// Home page components
import { HomeComponent }  from './home_components/home.component';
import { Notify } from './home_components/notifications.component';
import { MessagesComponent } from './home_components/messages.component';

// Micro services components
import { ServicesComponent } from './services_components/micro-services.component';

// Navbars components
import { NavbarComponent }  from './navbar_components/navbar.component';

// Navtools components
import { NavtoolsComponent }  from './navtools.component';
import { NavtoolsModule }       from './navtools.module';

import { DashboardComponent, EmailComponent }  from './dashboard_components/dashboard.component';

import { AtelierComponent }  from './atelier.component';

import { RenderComponent } from './render.component';

import { AppRoutingModule }     from './app-routing.module';



// Meeting components
import { MeetingComponent, KolejkaComponent, UmowComponent } from './meeting_components/meeting-component';
import { OpinionComponent } from './meeting_components/opinion-component'

// Medical leave components
import { ZwolnienieComponent } from './leave_components/zwolnienie-component';
import { PracodawcaComponent } from './leave_components/pracodawca-component';
import { LekarzComponent } from './leave_components/lekarz-component';
import { PacjentComponent } from './leave_components/pacjent-component';

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
  				  RenderComponent,
					Notify,
					ServicesComponent,
					MeetingComponent,
					KolejkaComponent, 
					UmowComponent,
					 UrzedowanieComponent,
					 OpinionComponent,
					 RatingComponent,
					 ZwolnienieComponent,
					 PracodawcaComponent,
					 LekarzComponent,
					 PacjentComponent,
					 EmailComponent 
				],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
