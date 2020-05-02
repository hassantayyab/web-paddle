import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss', '../authentication.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

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
      agreement: [false]
    })
  }

  async onSignup(params: any = null) {
    console.log('Signup', this.signupForm.value);

    const obj = {
      email: this.signupForm.controls['email'].value,
      password: this.signupForm.controls['password'].value
    }

    try {
      const result = await this.auth$.signUpRegular(obj);
      console.log('onSignup SUCCESS =>', result);
    } catch (error) {
      console.log(error);
    }
  }
}
