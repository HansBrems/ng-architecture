import { provideHttpClient } from '@angular/common/http';
import {
  ApplicationConfig,
  importProvidersFrom,
  isDevMode,
} from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { provideTransloco } from '@ngneat/transloco';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NGXS_PLUGINS, NgxsModule } from '@ngxs/store';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { routes } from './app.routes';
import { AppState } from './core/store-ngxs/app.state';
import { SpinnerPlugin } from './core/store-ngxs/spinner.plugin';
import { AppData } from './data/app-data';
import { TranslocoHttpLoader } from './transloco-loader';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    provideRouter(routes),
    provideTransloco({
      config: {
        availableLangs: ['en'],
        defaultLang: 'en',
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),
    provideHttpClient(),
    importProvidersFrom(
      HttpClientInMemoryWebApiModule.forRoot(AppData, {
        delay: 2000,
        passThruUnknownUrl: true,
      }),
      NgxsModule.forRoot([AppState], {
        developmentMode: isDevMode(),
      }),
      NgxsReduxDevtoolsPluginModule.forRoot(),
    ),
    {
      provide: NGXS_PLUGINS,
      useClass: SpinnerPlugin,
      multi: true,
    },
  ],
};
