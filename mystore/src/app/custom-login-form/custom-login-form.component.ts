
import { Component,ViewChild,OnInit} from '@angular/core';
import { FormBuilder, Validators,FormGroup,NgForm,FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthRedirectService, AuthService, GlobalMessageService, GlobalMessageType, WindowRef, } from '@spartacus/core';
import { Subscription } from 'rxjs';
import { CheckoutConfigService,LoginFormComponent,CustomFormValidators} from '@spartacus/storefront/fesm2015/spartacus-storefront';
@Component({
  selector: 'login',
  templateUrl: './custom-login-form.component.html',
})
export class CustomLoginFormComponent extends LoginFormComponent implements OnInit {
sub: Subscription;
  form: FormGroup;
  loginAsGuest = false;

  constructor(
    protected auth: AuthService,
    protected globalMessageService: GlobalMessageService,
    protected fb: FormBuilder,
    protected authRedirectService: AuthRedirectService,
    protected winRef: WindowRef,
    protected activatedRoute: ActivatedRoute
  ) {
    super( AuthService,
      GlobalMessageService,
      FormBuilder,
      AuthRedirectService,
      WindowRef,
      ActivatedRoute)
  }
ngOnInit(){
  this.form=new FormGroup({
    'userId':new FormControl('', Validators.minLength(4)),
    'password':new FormControl('', Validators.minLength(4))
  })


}



  }
