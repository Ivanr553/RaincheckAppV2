import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/Observable/timer";

import { Raincheck } from "../../models/raincheck.model";

@Injectable()
export class GetRaincheckService {

  constructor(private http: Http) { }
  getRainchecks(): Observable<Raincheck[]> {
    let user = {
      user: localStorage.getItem("user")
    };
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.post("raincheck", user, {headers: headers})
      .map(res => res.json())
  }

}
