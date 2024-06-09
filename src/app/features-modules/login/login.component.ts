import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../core/services/auth/auth.service';
import { TokenService } from '../../core/services/auth/token.service';
import { UserToken } from 'src/app/core/models/UserToken';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  authenticationForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  constructor(private authService: AuthService, private tokenStorage: TokenService, private router: Router) { }

  ngOnInit() {
    console.log("hello")
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }

  login() {
    this.authService.login(this.authenticationForm).subscribe((data) => {
     const tokenModel = JSON.parse(data)
      this.tokenStorage.saveToken(tokenModel.token);
   
      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.router.navigateByUrl("home");
    },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

}
