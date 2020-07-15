import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../authentication.interface';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss', '../authentication.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  formSubmitted: boolean;

  constructor(private fb: FormBuilder, public auth$: AuthenticationService) {
    this.initForm();
  }

  ngOnInit(): void {
  }

  initForm() {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      agreement: ['', [Validators.required, Validators.pattern('true')]]
    })
  }

  async onSignup() {
    this.formSubmitted = true;
    this.signupForm.markAllAsTouched();
    if (this.signupForm.invalid) return;

    const obj: User = {
      firstName: this.signupForm.controls['firstName'].value,
      lastName: this.signupForm.controls['lastName'].value,
      name: `${this.signupForm.controls['firstName'].value} ${this.signupForm.controls['lastName'].value}`,
      email: this.signupForm.controls['email'].value,
      password: this.signupForm.controls['password'].value,
      picture: '',
      emailVerified: false
    }

    try {
      const result = await this.auth$.signUpRegular(obj);
      // console.log('onSignup SUCCESS =>', result);
    } catch (error) {
      console.log(error);
    }
  }
}
