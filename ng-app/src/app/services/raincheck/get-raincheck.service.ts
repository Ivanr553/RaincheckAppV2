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
    // let observation = Observable.timer(2000);
    let headers = new Headers();
    headers.append("Content-Type", "applicatin/json");
    return this.http.get("http://localhost:3000/raincheck", {headers: headers})
      .map(res => res.json())
  }

  refreshData() {

  }

}
