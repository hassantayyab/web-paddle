import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';

/* Components */
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: SignupComponent },
      { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
    ]
  },
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
