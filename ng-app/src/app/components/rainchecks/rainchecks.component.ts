import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import "rxjs/add/Observable/timer";
import { Router } from "@angular/router";

import { Raincheck } from "../../models/raincheck.model";

import { GetRaincheckService } from "../../services/raincheck/get-raincheck.service";
import { DeleteRnService } from "../../services/deleteRn/delete-rn.service";

@Component({
  selector: 'app-rainchecks',
  templateUrl: './rainchecks.component.html',
  styleUrls: ['./rainchecks.component.sass']
})
export class RainchecksComponent implements OnInit {

  rainchecks: Raincheck[]

  // rainchecks: any;
  raincheckReturn: any;

  constructor(
    private getRaincheckService: GetRaincheckService,
    private deleteRnService: DeleteRnService,
    private router: Router
  ) { }


  ngOnInit() {
    console.log("running in background: callRaincheckService");
    let that = this;
    setInterval(function(){that.callRaincheckService()}, 1000)
  }

  callRaincheckService() {
    this.getRaincheckService.getRainchecks().subscribe(rainchecks => {
      if(!rainchecks.length) {
        this.rainchecks = null;
      }
      else {
        this.rainchecks = rainchecks;
      }
    })
  }

  deleteRaincheck(el, index) {
    if(confirm("Delete " + el.rainchecks[index].name + "'s riancheck?")) {
      let thisId = el.rainchecks[index]._id;
      this.deleteRnService.removeRn(thisId)
      this.getRaincheckService.getRainchecks().subscribe(rainchecks => {
        if(!rainchecks.length) {
          this.rainchecks = null;
        }
        else {
          this.rainchecks = rainchecks;
        }
      })
    }
    else {
    }
  }
}
