import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm: FormGroup;
  public emailErrMsg;

  constructor(private fb: FormBuilder) { }

  get email() {
    return this.signupForm.get('email');
  }

  get password() {
    return this.signupForm.get('password');
  }

  ngOnInit() {
    this.initForm();
    this.email.valueChanges.subscribe(() => {
      this.emailErrMsg = this.email.hasError('required') ? 'Email is required.' : this.email.hasError('email') ? 'Invalid email.' : null;
    });
  }

  onFormSubmit(value) {
    console.log(value);
  }

  getMessage() {
    return this.email.hasError('required') ? 'Email is required.' : this.email.hasError('email') ? 'Invalid email.' : null;
  }

  initForm() {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      birthDate: [null, Validators.required],
      agree: [null, Validators.required]
    });
  }

}
