import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';

import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

// simple log-function (03.02.2020, SRM)
function log(message) {
  console.log(message);
}

// var-example (valid javascript) (03.02.2020, SRM)
function doSomethingWithVar() {
  // start
  console.log('start doSomethingWithVar');

  // loop
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }

  // finally
  console.log('Finally: ' + i);

  // end
  console.log('end doSomethingWithVar');
}

// let-example (valid javascript) (03.02.2020, SRM)
function doSomethingWithLet() {
  // start
  console.log('start doSomethingWithLet');

  // loop
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }

  // finally
  // -> this should show an error but still works when compiled to // javascrip
  console.log('Finally: ' + i);

  // end
  console.log('end doSomethingWithLet');
}

// set message (03.02.2020, SRM)
var message = 'Hey there, how are you doing?';

// log message (03.02.2020, SRM)
log(message);

// VAR-Example (03.02.2020, SRM)
doSomethingWithVar();


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/