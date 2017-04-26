import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Http, Headers } from "@angular/http";

@Injectable()
export class UserService {

  constructor(
    private router: Router,
    private http: Http
  ) { }

  login(user) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.post("authenticate", user, {headers: headers});
  }

  logOut() {
    localStorage.setItem("user", "");
    localStorage.setItem("token", "");
    localStorage.setItem("id", "");
  }

  checkUser() {
    return localStorage.getItem("user");
  }

}
