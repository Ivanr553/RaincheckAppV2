import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import  { PostUserService } from "../../services/post/post-user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  username: string;
  password: string;

  constructor(
    private postUserService: PostUserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    let user = {
      username: this.username,
      password: this.password
    }
    this.postUserService.postUser(user)
      .subscribe(data => {
        console.log(data);
      });
      this.router.navigate(["../login"]);
  }
}
