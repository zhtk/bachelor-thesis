import { Component } from '@angular/core';
import { MenuService } from './menu-service';

@Component({
  selector: 'my-app',
  templateUrl: 'pages/mockup.html',
  providers: [MenuService]
})
export class AppComponent {}
