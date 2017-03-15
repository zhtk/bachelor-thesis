import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { NavtoolsModule } from './app/navtools.module';

platformBrowserDynamic().bootstrapModule(AppModule);
//platformBrowserDynamic().bootstrapModule(NavtoolsModule);