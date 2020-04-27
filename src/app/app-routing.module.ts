import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AuthGuard } from './shared/guards/auth.guard';
import { NoAuthGuard } from './shared/guards/no-auth.guard';


const routes: Routes = [
  // { path: '', redirectTo: '/home/dashboard', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./modules/pages/authentication/authentication.module').then(m => m.AuthenticationModule),
    canLoad: [NoAuthGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/pages/home/home.module').then(m => m.HomeModule),
    canLoad: [AuthGuard]
  },
  { path: '', loadChildren: () => import('./modules/pages/landing/landing.module').then(m => m.LandingModule) },
  {
    path: '**',
    loadChildren: () => import('./modules/pages/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
