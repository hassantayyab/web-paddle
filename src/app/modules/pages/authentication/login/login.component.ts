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

  constructor(private fb: FormBuilder, public auth$: AuthenticationService) {
    this.initForm();
  }

  ngOnInit(): void {
  }

  initForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      rememberMe: [false]
    })
  }

  async onLogin() {
    const obj: Login = {
      email: this.loginForm.controls['email'].value,
      password: this.loginForm.controls['password'].value
    }

    try {
      const result = await this.auth$.signInRegular(obj);
      // console.log('onSignup SUCCESS =>', result);
    } catch (error) {
      console.log(error);
    }
  }
}
