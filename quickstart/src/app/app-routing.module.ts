import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtelierComponent }   from './atelier.component';
import { HomeComponent } from './home.component';
import { ServicesComponent } from './micro-services.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main',  component: HomeComponent },
  { path: 'test',  component: AtelierComponent },
  { path: 'services',  component: ServicesComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}