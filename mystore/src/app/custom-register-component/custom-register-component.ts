import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import {
  AuthRedirectService,
  AuthService,
  GlobalMessageService,
  WindowRef,
} from "@spartacus/core";
import {
  CheckoutConfigService,
  LoginFormComponent,
} from "@spartacus/storefront";
import { Subscription } from "rxjs";

@Component({
  selector: "login",
  templateUrl: "./custom-register-component.html",
})
export class CustomRegisterComponent extends LoginFormComponent
  implements OnInit {
  sub: Subscription;
  loginAsGuest = false;

  constructor(
    auth: AuthService,
    globalMessageService: GlobalMessageService,
    fb: FormBuilder,
    authRedirectService: AuthRedirectService,
    winRef: WindowRef, // tslint:disable-line,
    activatedRoute: ActivatedRoute,
    checkoutConfigService: CheckoutConfigService
  ) {
    super(
      auth,
      globalMessageService,
      fb,
      authRedirectService,
      winRef,
      activatedRoute,
      checkoutConfigService
    );
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
