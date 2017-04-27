import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { UserService } from "../../services/user/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  response: any;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

    ngOnInit() {
    }

    onLoginSubmit() {
      let user = {
        username: this.username,
        password: this.password
      }
      this.userService.login(user)
        .subscribe(res => {
          if(res) {
            // console.log(res.json().token)
            localStorage.setItem("id", res.json().token);
            localStorage.setItem("user", res.json().user);
            this.response = "successful";
            this.router.navigate(['../']);
          }
          else {
            this.response = res.json().message;
          }
        })
    }

}
