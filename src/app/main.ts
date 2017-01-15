import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {AppModule} from './app.module';

//Using JIT compiler here
//enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);
