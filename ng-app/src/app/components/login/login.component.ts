import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { LoginService } from "../../services/login/login.service";

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
    private loginService: LoginService,
    private router: Router
  ) { }

    ngOnInit() {
    }

    onLoginSubmit() {
      let user = {
        username: this.username,
        password: this.password
      }
      this.loginService.login(user)
        .subscribe(res => {
          if(res) {
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
