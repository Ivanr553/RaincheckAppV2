import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { UserService } from "../../services/user/user.service";

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


  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.profileBorder = "solid 1px rgba(0, 0, 0, 0)"
    this.dropVal = false;
    this.user = localStorage.getItem("user");
    let that = this;
    setInterval(function(){return that.user = localStorage.getItem("user")}, 3000)
  }

  checkLoggedIn() {
    if(localStorage.getItem("user") != "") {
      return true;
    }
  }

  setuser() {
    this.user = localStorage.getItem("user");
  }

  logOut() {
    if(confirm("Are you sure you want to log out?")){
      this.userService.logOut();
      this.dropdown();
      this.router.navigate(['../']);
    }
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
