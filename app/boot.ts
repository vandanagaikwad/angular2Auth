import 'core-js';
import 'zone.js/dist/zone';
import {HTTP_PROVIDERS,HttpModule} from '@angular/http';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router';
import 'rxjs/Rx';

import {AppComponent} from './app.component';

bootstrap(AppComponent, [HTTP_PROVIDERS,ROUTER_PROVIDERS]);
