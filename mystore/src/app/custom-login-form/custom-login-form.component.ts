import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {
  AuthRedirectService,
  AuthService,
  GlobalMessageService,
  GlobalMessageType,
} from "@spartacus/core";
import { Subscription } from "rxjs";

@Component({
  selector: "login",
  templateUrl: "./custom-login-form.component.html",
})
export class CustomLoginFormComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  loginAsGuest = false;
  sub: Subscription;

  constructor(
    protected auth: AuthService,
    protected globalMessageService: GlobalMessageService,
    protected authRedirectService: AuthRedirectService
  ) {}

  /*
  This step is only performed to override the exiting form valition present in LoginFormComponent
  */
  ngOnInit() {
    this.loginForm = new FormGroup({
      userId: new FormControl("", Validators.minLength(4)),
      password: new FormControl("", Validators.minLength(4)),
    });
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  // Creating custom Login functionality to learn more about the same.
  submitCustomLoginForm() {
    if (this.loginForm.valid) {
      this.customLogin();
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
  customLogin() {
    console.log(this.loginForm);
    const { userId, password } = this.loginForm.controls;
    this.auth.authorize(userId.value.toLowerCase(), password.value);

    if (!this.sub) {
      this.sub = this.auth.getUserToken().subscribe((data) => {
        if (data && data.access_token) {
          this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_ERROR);
          this.authRedirectService.redirect();
        }
      });
    }
  }
}
