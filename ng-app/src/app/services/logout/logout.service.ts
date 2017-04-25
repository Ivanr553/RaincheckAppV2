import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable()
export class LogoutService {

  constructor(private router: Router) { }

  logOut() {
    localStorage.setItem("user", "");
    localStorage.setItem("token", "");
    localStorage.setItem("id", "");
  }

}
