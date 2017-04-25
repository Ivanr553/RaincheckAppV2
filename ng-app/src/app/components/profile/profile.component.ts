import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  user: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.user = localStorage.getItem("user");
  }

}
