import { NgModule, ModuleWithProviders } from '@angular/core'
import { OverlayModule } from '@angular/cdk/overlay';
import { MatIconModule } from '@angular/material/icon';

import { defaultToastConfig, TOAST_CONFIG_TOKEN } from './toast-config';
import { ToasterComponent } from './toaster.component';

@NgModule({
  imports: [OverlayModule, MatIconModule],
  declarations: [ToasterComponent],
  entryComponents: [ToasterComponent]
})
export class ToasterModule {
  public static forRoot(config = defaultToastConfig): ModuleWithProviders<ToasterModule> {
    return {
      ngModule: ToasterModule,
      providers: [
        {
          provide: TOAST_CONFIG_TOKEN,
          useValue: { ...defaultToastConfig, ...config },
        },
      ],
    };
  }
}
