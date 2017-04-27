import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  user: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    route.params.subscribe(val => {
      this.user = localStorage.getItem("user");
    })
  }

  ngOnInit() {
    let that = this;
    setInterval(function(){return that.user = localStorage.getItem("user")}, 1000);
    if(this.user) {
      this.router.navigate(['/rainchecks'])
    }
  }

}
