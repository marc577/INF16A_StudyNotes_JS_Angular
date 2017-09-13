import { Component, OnInit, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  private currentUser: string;
  private userInitialen = [];
  private searchText: string;


  constructor(private _cookieService:CookieService) { }

  ngOnInit() {
    this.currentUser = localStorage.getItem("currentUser");
    this.userInitialen = this.currentUser.split(" ");
  }

  private logout(){
    this.setCookie("isLoggedIn", "false", 1);
  }

  private setCookie(name: string, value: string, expireDays: number, path: string = "") {
    let d:Date = new Date();
    d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
    let expires:string = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + "; " + expires + (path.length > 0 ? "; path=" + path : "");
}
}
