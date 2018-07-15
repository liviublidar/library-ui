import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor() {}
  ngOnInit() {}

  public guiState = {
    showSignup: false
  };

  public formData = {
    loginForm: {
      email: "",
      pwd: ""
    },
    signupForm: {
      email: "",
      pwd: "",
      repeatPwd: ""
    }
  }

  public showSignupGui(): void {
    this.guiState.showSignup = !this.guiState.showSignup;
  }

  public isModelEmpty(modelValue): boolean {
    return modelValue.length === 0;
  }

  public debugForm(): void {
    console.log(this.formData);
  }



}
