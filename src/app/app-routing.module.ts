import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AuthGuard } from './shared/guards/auth.guard';
import { NoAuthGuard } from './shared/guards/no-auth.guard';


const routes: Routes = [
  {
    path: 'authentication',
    loadChildren: () => import('./modules/pages/authentication/authentication.module').then(m => m.AuthenticationModule),
    canLoad: [NoAuthGuard]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/pages/dashboard/dashboard.module').then(m => m.DashboardModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'settings',
    loadChildren: () => import('./modules/pages/settings/settings.module').then(m => m.SettingsModule),
    canLoad: [AuthGuard]
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: '**',
    loadChildren: () => import('./modules/pages/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
