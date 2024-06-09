import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenService } from './token.service';

@Injectable(
  { providedIn: "root" }
)
export class LoginGuardService implements CanActivate {

  constructor(private tokenService: TokenService, private router: Router) { }

  canActivate() {
    if (this.tokenService.getToken()) {
      this.router.navigateByUrl("home");
      return false;
    } else {
      return true;
    }
  }
}