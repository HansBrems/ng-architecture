import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

import { AppConfiguration } from '../models/configuration/app-configuration';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {
  private readonly http = inject(HttpClient);

  getConfiguration(): Promise<AppConfiguration> {
    return firstValueFrom(
      this.http.get<AppConfiguration>('/assets/config/app-config.json'),
    );
  }
}
