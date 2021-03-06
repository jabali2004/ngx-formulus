import { InjectionToken } from '@angular/core';
import type { NgxFormulusConfig } from '../../interfaces/ngx-formulus-config';

/**
 * This is not a real service, but it looks like it from the outside.
 * It's just an InjectionTToken used to import the config object, provided from the outside
 */
export const ConfigService = new InjectionToken<NgxFormulusConfig>(
  'NgxFormulusConfig'
);
