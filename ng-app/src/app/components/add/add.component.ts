import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AddraincheckService } from "../../services/addRn/addraincheck.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.sass']
})
export class AddComponent implements OnInit {

  merchandiseList: any;

  name: string;
  phone: string;
  comments: string;
  skus: any;
  items: any;
  merchandise: any;

  constructor(
    private add: AddraincheckService,
    private router: Router
) { }

  ngOnInit() {
    this.merchandiseList = ["combo"];
    this.skus = [];
    this.items = []
  }

  addItem() {
    this.merchandiseList.push("combo");
  }

  removeItem() {
    if(this.merchandiseList.length > 1) {
      this.merchandiseList.splice(0, 1);
    }
  }

  submitRaincheck(){
    //check for empty fields and incorrect phone number length
    if(this.name == "" || this.phone == "" || this.skus.length === 0 || this.items.length === 0 || this.items.length != this.skus.length || this.phone.length != 10) {
      return alert("Fill in all fields before submitting");
    }

    let merchandise = [];

    for(let i = 0; i < this.skus.length; i++) {
      let combo = {
        sku: null,
        item: null,
      }
      combo.sku = this.skus[i];
      combo.item = this.items[i];
      merchandise.push(combo);
    }

    let raincheck = {
      userid: localStorage.getItem("userid"),
      name: this.name,
      phone: this.phone,
      comments: this.comments,
      merchandise: merchandise
    }
    this.add.addRaincheck(raincheck);
    this.router.navigate(["../rainchecks"]);
  }

}
