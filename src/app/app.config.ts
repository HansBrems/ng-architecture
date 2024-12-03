import { provideHttpClient, withInterceptors } from '@angular/common/http';
import {
  ApplicationConfig,
  importProvidersFrom,
  isDevMode,
} from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideTransloco } from '@ngneat/transloco';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { routes } from './app.routes';
import { httpErrorInterceptor } from './core/interceptors/http-error.interceptor';
import { AppData } from './data/app-data';
import { TranslocoHttpLoader } from './transloco-loader';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    provideRouter(routes, withComponentInputBinding()),
    provideTransloco({
      config: {
        availableLangs: ['en'],
        defaultLang: 'en',
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),
    provideHttpClient(withInterceptors([httpErrorInterceptor])),
    importProvidersFrom(
      HttpClientInMemoryWebApiModule.forRoot(AppData, {
        delay: 50,
        passThruUnknownUrl: true,
      }),
    ),
  ],
};
