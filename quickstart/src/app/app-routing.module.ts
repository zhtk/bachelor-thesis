import { NgModule }                    from '@angular/core';
import { RouterModule, Routes }        from '@angular/router';
import { AtelierComponent }            from './atelier.component';
import { LoginComponent }              from './login.component';
import { PreprocComponent }            from './preproc.component';

import { RenderComponent }             from './render.component';
import { TestComponent }               from './TestComponent'

import { PreviewComponent }            from './preview.component';

import { HomeComponent }               from './home_components/home.component';
import { ServicesComponent }           from './services_components/micro-services.component';
import { MessagesComponent }           from './home_components/messages.component';
// Meeting components
import { KolejkaComponent }            from './meeting_components/kolejka-component';
import { UmowComponent }               from './meeting_components/reservation_components/umow-component';
import { MeetingComponent }            from './meeting_components/meeting-component';
import { UrzedowanieComponent }        from './meeting_components/reservation_components/urzedowanie-component';
import { OpinionComponent }            from './meeting_components/opinion_components/opinion-component'

// Medical Leave components
import { ZwolnienieComponent }         from './leave_components/zwolnienie-component';
import { PracodawcaComponent }         from './leave_components/pracodawca-component';
import { LekarzComponent }             from './leave_components/lekarz-component';
import { PacjentComponent }            from './leave_components/pacjent-components/pacjent-component';
import { PageNotFoundComponent }       from './page-not-found.component';
import { InboxComponent }              from './home_components/inbox.component';
import { SendboxComponent }            from './home_components/sendbox.component';
import { StyleGuideComponent }         from './Components/StyleGuideComponent';
import { PiecsetComponent }            from "./piecsetComponent";
import { EditorComponent }             from "./Editor/EditorComponent";
import { CreatedSubmissionsComponent } from "./created-submissions.component";
import { ApproveSubmissionsComponent } from "./approved-submissions.component";
import { DynamicListComponent }        from "./Components/FrontComponents/DynamicListComponent";

const routes: Routes = [

        { path: 'editor', component: EditorComponent},
        { path: 'auth',  component: LoginComponent },
        { path: '404', component: PageNotFoundComponent },
        { path: '',  component: PreprocComponent, children: [
            { path: '', redirectTo: '/main', pathMatch: 'full' },
            { path: 'main',  component: HomeComponent },
            { path: 'test',  component: AtelierComponent },
            { path: 'test/:name', component: TestComponent },
            { path: 'preview/:name/:id', component: PreviewComponent },
            { path: 'style_guide/:category',  component: StyleGuideComponent },
            { path: 'services',  component: ServicesComponent },
            { path: 'messages',  component: MessagesComponent, children: [
                { path: '', redirectTo: 'inbox', pathMatch: 'full' },
                { path: 'inbox', component: InboxComponent },
                { path: 'sendbox', component: SendboxComponent },
            ]},
            { path: 'meeting',  component: MeetingComponent },
            { path: 'umow',  component: UmowComponent },
            { path: 'kolejka',  component: KolejkaComponent },
            { path: 'render',  component: RenderComponent },
            { path: 'opinion',  component: OpinionComponent },
            { path: 'zwolnienie',  component: ZwolnienieComponent },
            { path: 'pracodawca',  component:PracodawcaComponent },
            { path: 'lekarz',  component: LekarzComponent },
            { path: 'pacjent',  component: PacjentComponent },
            { path: 'sublist', component: CreatedSubmissionsComponent },
            { path: 'approve', component: ApproveSubmissionsComponent },
            { path: 'lista_test', component: DynamicListComponent }
        ]},
        { path: '**', redirectTo: '/404'} // ostatni komponent - dodajemy nowe sciezki przed nim!
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
