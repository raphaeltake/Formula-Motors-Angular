import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideRouter(routes),
  {
    provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
    useValue: { duration: 1500 }
  }]
};

import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

