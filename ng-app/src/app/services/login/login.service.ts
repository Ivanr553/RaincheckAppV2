import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  login(user) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.post("http://localhost:3000/authenticate", user, {headers: headers});
  }


}
