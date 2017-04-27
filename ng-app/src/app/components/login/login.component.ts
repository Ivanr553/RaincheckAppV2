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
      if(!this.username || !this.password) {
        return alert("Please fill in all fields");
      }
      let user = {
        username: this.username,
        password: this.password
      }
      this.userService.login(user)
        .subscribe(res => {
          if(res) {
            console.log(res);
            if(res.json().invalid) {
              return alert(res.json().invalid);
            }
            localStorage.setItem("userid", res.json().userid);
            localStorage.setItem("user", res.json().user);
            this.router.navigate(['../']);
          }
          else {
            this.response = res.json().message;
          }
        })
    }

}
