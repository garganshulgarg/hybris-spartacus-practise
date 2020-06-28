import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import {
  AuthRedirectService,
  AuthService,
  GlobalMessageService,
} from "@spartacus/core";
import { LoginFormComponent } from "@spartacus/storefront";

@Component({
  selector: "login",
  templateUrl: "./custom-login-form.component.html",
})
export class CustomLoginFormComponent extends LoginFormComponent
  implements OnInit {
  loginAsGuest = false;

  constructor(
    auth: AuthService,
    globalMessageService: GlobalMessageService,
    fb: FormBuilder,
    authRedirectService: AuthRedirectService
  ) {
    super(auth, globalMessageService, fb, authRedirectService);
  }

  /*
  This step is only performed to override the exiting form valition present in LoginFormComponent
  */
  ngOnInit() {
    this.form = new FormGroup({
      userId: new FormControl("", Validators.minLength(4)),
      password: new FormControl("", Validators.minLength(4)),
    });
  }
}
