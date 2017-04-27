import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Http, Headers } from "@angular/http";

@Injectable()
export class AddraincheckService {

  constructor(
    private router: Router,
    private http: Http
  ) { }

  addRaincheck(newRaincheck) {
    console.log(newRaincheck)
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.post("raincheck/add", newRaincheck, {headers: headers}).subscribe(res => res.json());
  }

}
