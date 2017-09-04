import { Component, OnInit, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  private currentUser: string;
  private userInitialen = [];
  private searchText: string;


  constructor() { }

  ngOnInit() {
    this.currentUser = localStorage.getItem("currentUser");
    this.userInitialen = this.currentUser.split(" ");
  }
}
