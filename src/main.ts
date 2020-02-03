function log(message) {
  console.log(message);
}

function doSomething() {
  for (var i = 0; i < 5; i++) {
    log(i);
  }

  log('Finally: ' + i);
}

var message = 'Hey there, how are you doing?';

log(message);

/*
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';

import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
*/

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/