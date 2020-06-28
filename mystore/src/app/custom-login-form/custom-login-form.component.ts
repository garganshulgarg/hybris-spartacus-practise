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
  forbiddenUsers = ["check", "validate"];
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
      userId: new FormControl("", [
        Validators.required,
        Validators.email,
        this.forbiddenUserIds.bind(this),
      ]),
      password: new FormControl("", Validators.required),
    });
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  // Creating custom validators
  forbiddenUserIds(control: FormControl): { [s: string]: boolean } {
    for (var forbiddenUser of this.forbiddenUsers) {
      if (control.value.includes(forbiddenUser)) {
        console.log("Validator1");
        return { nameIsForbidden: true };
      }
    }
    return null;
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
