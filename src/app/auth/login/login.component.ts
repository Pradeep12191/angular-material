import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  get email() {
    return this.loginForm.get('email');
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onFormSubmit() {
    console.log(this.loginForm.value);
  }

  getMessage() {
    return this.email.hasError('required') ? 'Email is required.' : this.email.hasError('email') ? 'Invalid email.' : '';
  }

}
