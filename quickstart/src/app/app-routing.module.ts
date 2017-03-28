import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtelierComponent }   from './atelier.component';
import { HomeComponent } from './home.component';
import { ServicesComponent } from './micro-services.component';
import { MessagesComponent } from './messages.component';
import { MeetingComponent, KolejkaComponent, UmowComponent } from './meeting-component';
import { RenderComponent } from './render.component';
import { OpinionComponent } from './opinion-component'
import { ZwolnienieComponent } from './zwolnienie-component';

import { PracodawcaComponent } from './pracodawca-component';
import { LekarzComponent } from './lekarz-component';
import { PacjentComponent } from './pacjent-component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main',  component: HomeComponent },
  { path: 'test',  component: AtelierComponent },
  { path: 'services',  component: ServicesComponent },
  { path: 'messages',  component: MessagesComponent },
  { path: 'meeting',  component: MeetingComponent },
  { path: 'umow',  component: UmowComponent },
  { path: 'kolejka',  component: KolejkaComponent },
  { path: 'render',  component: RenderComponent },
  { path: 'opinion',  component: OpinionComponent },
  { path: 'zwolnienie',  component: ZwolnienieComponent },
  { path: 'pracodawca',  component:PracodawcaComponent },
  { path: 'lekarz',  component: LekarzComponent},
  { path: 'pacjent',  component: PacjentComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}