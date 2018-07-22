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
    showSignup: false,
    showLoginPwd: false,
    showSignupPwd: false,
    showSignupRepeatPwd: false
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

  public isModelEmpty(modelValue): boolean {
    return modelValue.length === 0;
  }

  public toggleSignupGui(state?: boolean): void {
    state === undefined ? this.guiState.showSignup = !this.guiState.showSignup : this.guiState.showSignup = state;
  }

  public toggleShowLoginPwd(state?: boolean, e?): void {
    state === undefined ? this.guiState.showLoginPwd = ! this.guiState.showLoginPwd : this.guiState.showLoginPwd = state;
  }

  public debugForm(): void {
    console.log(this.formData);
  }



}
