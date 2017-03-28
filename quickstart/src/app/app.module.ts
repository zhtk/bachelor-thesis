import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ServicesComponent } from './micro-services.component';
import { Notify } from './notifications.component';
import { AppComponent }  from './app.component';
import { NavtoolsComponent }  from './navtools.component';
import { NavbarComponent }  from './navbar.component';
import { DashboardComponent, EmailComponent }  from './dashboard.component';
import { HomeComponent }  from './home.component';
import { AtelierComponent }  from './atelier.component';
import { MessagesComponent } from './messages.component';
import { RenderComponent } from './render.component';
import { ZwolnienieComponent } from './zwolnienie-component';
import { AppRoutingModule }     from './app-routing.module';
import { OpinionComponent, RatingComponent } from './opinion-component'
import { NavtoolsModule }       from './navtools.module';
import { MeetingComponent, KolejkaComponent, UmowComponent , UrzedowanieComponent}       from './meeting-component';

import { PracodawcaComponent } from './pracodawca-component';
import { LekarzComponent } from './lekarz-component';
import { PacjentComponent } from './pacjent-component';


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
