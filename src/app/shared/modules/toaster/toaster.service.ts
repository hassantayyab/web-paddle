import { Injectable, Injector, Inject } from '@angular/core';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { ToasterComponent } from './toaster.component';
import { ToastData, TOAST_CONFIG_TOKEN, ToastConfig } from './toast-config';
import { ToastRef } from './toast-ref';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  private lastToast: ToastRef;

  constructor(
    private overlay: Overlay,
    private parentInjector: Injector,
    @Inject(TOAST_CONFIG_TOKEN) private toastConfig: ToastConfig
  ) { }

  show(data: ToastData) {
    const positionStrategy = this.getPositionStrategy();
    const overlayRef = this.overlay.create({ positionStrategy });

    const toastRef = new ToastRef(overlayRef);
    this.lastToast = toastRef;

    const injector = this.getInjector(data, toastRef, this.parentInjector);
    const toastPortal = new ComponentPortal(ToasterComponent, null, injector);

    overlayRef.attach(toastPortal);

    return toastRef;
  }

  getPositionStrategy() {
    return this.overlay.position()
      .global()
      .top(this.getPosition())
      .right(this.toastConfig.position.right + 'px');
  }

  getPosition() {
    const lastToastIsVisible = this.lastToast && this.lastToast.isVisible();
    const position = lastToastIsVisible
      ? this.lastToast.getPosition().bottom
      : this.toastConfig.position.top;

    return position + 'px';
  }

  getInjector(data: ToastData, toastRef: ToastRef, parentInjector: Injector) {
    const tokens = new WeakMap();

    tokens.set(ToastData, data);
    tokens.set(ToastRef, toastRef);

    return new PortalInjector(parentInjector, tokens);
  }
}
