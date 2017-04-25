import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";

@Injectable()
export class DeleteRnService {

  constructor(
    private http: Http
  ) { }

  removeRn(rnId) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.post("http://localhost:3000/raincheck/delete",{id: rnId}, {headers: headers}).subscribe(r=>console.log(r));
  }

}
