import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { RainchecksComponent } from './components/rainchecks/rainchecks.component';
import { AddComponent } from './components/add/add.component';

import { PostUserService } from "./services/post/post-user.service";
import { LoginService } from './services/login/login.service';
import { GetRaincheckService } from './services/raincheck/get-raincheck.service';
import { LogoutService } from "./services/logout/logout.service";
import { DeleteRnService } from "./services/deleteRn/delete-rn.service"

const appRoutes: Routes = [
  {path: "", component: HomeComponent},
  {path: "register", component: RegisterComponent},
  {path: "login", component: LoginComponent},
  {path: "profile", component: ProfileComponent},
  {path: "rainchecks", component: RainchecksComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    ProfileComponent,
    RainchecksComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers:[
    PostUserService,
    LoginService,
    GetRaincheckService,
    LogoutService,
    DeleteRnService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
