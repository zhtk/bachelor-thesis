import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { LoginComponent } from './login.component';
import { PreprocComponent } from './preproc.component';

import {TextBox} from './Components/FormComponents/TextBox/TextBox'
import {TestComponent} from './TestComponent'





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

import { PageNotFoundComponent } from './page-not-found.component';

import { DashboardComponent}  from './dashboard_components/dashboard.component';

// Email windows components
import { EmailComponent }       from './email_components/email.component';

import { AtelierComponent }  from './atelier.component';

import { RenderComponent } from './render.component';

import { AppRoutingModule }     from './app-routing.module';



// Meeting components
import { KolejkaComponent } from './meeting_components/kolejka-component';
import { UmowComponent } from './meeting_components/reservation_components/umow-component';
import { MeetingComponent } from './meeting_components/meeting-component';
import { UrzedowanieComponent } from './meeting_components/reservation_components/urzedowanie-component';


// Visit opinion subpage
import { RatingComponent } from './meeting_components/opinion_components/rating-component'
import { OpinionComponent } from './meeting_components/opinion_components/opinion-component'


// Medical leave components
import { ZwolnienieComponent } from './leave_components/zwolnienie-component';
import { PracodawcaComponent } from './leave_components/pracodawca-component';
import { LekarzComponent } from './leave_components/lekarz-component';
import { PacjentComponent } from './leave_components/pacjent-components/pacjent-component';
import { ListaComponent } from './leave_components/pacjent-components/list-leaves-component';
import { BreadCrumbComponent } from './dashboard_components/breadcrumb.component';
import { InboxComponent } from './home_components/inbox.component';
import { SendboxComponent } from './home_components/sendbox.component';
import { RowComponent } from "./Components/FrontComponents/RowComponent";
import {ComponentCreator} from "./Components/ComponentsCore/ComponentCreator";
import {PanelComponent} from "./Components/FrontComponents/PanelComponent";
import { PeselComponent } from './Components/FormComponents/TextBox/PeselComponent';
import { ZipcodeComponent } from './Components/FormComponents/TextBox/PostalCodeComponent'
import { PasswordComponent } from './Components/FormComponents/TextBox/PasswordComponent'
import { LabelComponent } from './Components/FrontComponents/LabelComponent'
import {SubmitComponent} from "./Components/FormComponents/SubmitComponent";
import {FormComponent} from "./Components/FormComponents/FormComponent";
import { ProgressBarComponent } from "./Components/FormComponents/ProgressBarComponent";
import {HeadingComponent} from "./Components/FrontComponents/HeadingComponent";
import {PanelGroupComponent} from "./Components/FrontComponents/PanelGroupComponent";
import {ContentComponent} from "./Components/FrontComponents/ContentComponent";
import {IconComponent} from "./Components/FrontComponents/IconComponent";
import {SpanComponent} from "./Components/FrontComponents/SpanComponent";
import {StyleGuideComponent} from "./Components/StyleGuideComponent";
import {PiecsetComponent} from "./piecsetComponent";

import { KeysPipe } from './keys.pipe';
import {Button, DraggableDirective, EditorComponent, ResizableDirective} from "./Editor/EditorComponent";


@NgModule({
  imports:      [ BrowserModule,
  				  	    AppRoutingModule,
					        HttpModule,
    				      JsonpModule,
					        FormsModule,
  				      ],
  declarations: [ AppComponent,
  					KeysPipe,
    DraggableDirective ,
  				  	ResizableDirective,
  				  	HomeComponent,
  				  	PreprocComponent,
  				  	PageNotFoundComponent,
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
					EmailComponent,
					ListaComponent,
					BreadCrumbComponent,
					InboxComponent,
					SendboxComponent,
					TextBox,
					TestComponent,
					RowComponent,
					PanelComponent,
					PeselComponent,
					ProgressBarComponent,
					ZipcodeComponent,
          SubmitComponent,
          FormComponent,
					PasswordComponent,
					LabelComponent,
					LoginComponent,
          HeadingComponent,
          PanelGroupComponent,
          ContentComponent,
    EditorComponent,
    Button,
    IconComponent,
    SpanComponent,
    StyleGuideComponent,
    PiecsetComponent,
  ],
  bootstrap:    [ AppComponent ],
  entryComponents: [TestComponent, TextBox, RowComponent, PanelComponent, PeselComponent, PasswordComponent,
  					 LabelComponent, SubmitComponent, FormComponent, HeadingComponent, PanelGroupComponent, ContentComponent,
    IconComponent, ProgressBarComponent, SpanComponent, StyleGuideComponent, PiecsetComponent, ZipcodeComponent]
})
export class AppModule {
}


