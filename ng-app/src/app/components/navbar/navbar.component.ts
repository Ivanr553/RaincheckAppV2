import { Component, OnInit } from '@angular/core';

import { LogoutService } from "../../services/logout/logout.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  profileBorder: string;
  dropVal: boolean;
  user: string;
  // loggedIn = true;


  constructor(private logoutService: LogoutService) { }

  ngOnInit() {
    this.profileBorder = "solid 1px rgba(0, 0, 0, 0)"
    this.dropVal = false;
    this.user = localStorage.getItem("user");
  }

  checkLoggedIn() {
    if(localStorage.getItem("user") != "") {
      return true;
    }
  }

  logOut() {
    this.logoutService.logOut();
    this.dropdown();
    this.user = localStorage.getItem("user");
  }

  dropdown() {
    if(this.dropVal) {
      this.profileBorder = "solid 1px rgba(0, 0, 0, 0)"
      this.dropVal = false;
    }
    else {
      this.profileBorder = "solid 1px white"
      this.dropVal = true;
      // let that = this;
      // setTimeout(()=>{return that.dropVal = false}, 2000)
    }
  }


}
