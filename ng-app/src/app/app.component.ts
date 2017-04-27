import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

constructor(
) { }

   ngOnInit() {
     localStorage.setItem("user", "");
     localStorage.setItem("userid", "");
   }
}
