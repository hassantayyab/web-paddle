import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Login } from '../authentication.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../authentication.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  formSubmitted: boolean;

  constructor(private fb: FormBuilder, public auth$: AuthenticationService) {
    this.initForm();
  }

  ngOnInit(): void {
  }

  initForm() {
    this.formSubmitted = false;

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      rememberMe: [false]
    })

    if (JSON.parse(localStorage.getItem('credentials'))) {
      const credentials: Login = JSON.parse(localStorage.getItem('credentials'));
      this.loginForm.patchValue({
        email: credentials.email,
        password: credentials.password,
        rememberMe: credentials.rememberMe
      })
    }
  }

  async onLogin() {
    this.formSubmitted = true;
    this.loginForm.markAllAsTouched();
    if (this.loginForm.invalid) return;

    try {
      const result = await this.auth$.signInRegular(this.loginForm.value);
      // console.log('onSignup SUCCESS =>', result);
    } catch (error) {
      // console.log(error);
    }
  }
}
