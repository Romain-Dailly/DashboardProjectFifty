import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ErrorHandler } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LanguageService } from './../../services/language/language.service';
import { ApiCarrierService } from './../../swagger/api/carrier.service';
import { AuthenticationService } from './../../services/auth/authentication.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user = new FormControl('', [Validators.required]);
  private password = new FormControl('', [Validators.required]);
  private hide: boolean = true;
  private text;
  errorPost;

  constructor(private languageService: LanguageService,
              private apiCarrierService: ApiCarrierService,
              private authenticationService: AuthenticationService,
              private router: Router,
              private snackBar: MatSnackBar
              ) { }

  login() {
    this.apiCarrierService.operatorLogin({identifier: this.user.value, password:this.password.value})
      .subscribe(
          (value) => this.loginSuccess(value),
          (err) => this.loginError(err)
      );
  }

  loginSuccess(value) {

    this.authenticationService.storeLogInInfos(value);
  }

  loginError(error) {
    console.log('error', error);
    let snackText = '';
    if (error.status === 401){
      snackText = this.text.login.errorPost401
    } else {
      snackText = error.error.error;
    }
    this.user = new FormControl('', [Validators.required]);
    this.password = new FormControl('', [Validators.required]);
    this.openSnackBar(`${snackText} !`, '');
  }


  getUserErrorMessage() {
    return this.user.hasError('required') ? this.text.login.errorNoUser :
        '';
  }
  getPasswordErrorMessage() {
    return this.password.hasError('required') ? this.text.login.errorNoPassword :
        '';
  }

  openSnackBar(message: string, action :string) {
    this.snackBar.open(message, action, {duration : 4000});
  }

  ngOnInit() {

    this.text = this.languageService.text;
    this.authenticationService.logVerify();
  }

}
