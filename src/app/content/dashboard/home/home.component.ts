import {Component, Input, ElementRef, ViewChild, OnInit} from '@angular/core';
import {DataSource} from '@angular/cdk';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {MdSnackBar} from '@angular/material';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';
import { SearchFilterPipe } from './../../filter/searchfilter.pipe'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  @Input() childData: string;

  private sideName:string;
  private class = [];
  private student = [];
  private defaultStudents = [];
  private defaultTeachers = [];
  private defaultClasses = [];
  private defaultNotes = [];
  private searchtext: string;

  constructor(public snackBar: MdSnackBar){
    this.sideName = "Dashboard";
    this.defaultStudents = [{
      firstName: "Patrick",
      lastName: "Sachs",
      class: "5A"
    },{
      firstName: "Niklas",
      lastName: "Dietz",
      class: "5A"
    },{
      firstName: "Jannik",
      lastName: "Jannsen",
      class: "5A"
    },{
      firstName: "Peter",
      lastName: "Meier",
      class: "6A"
    },{
      firstName: "Alisa",
      lastName: "Neuer",
      class: "6A"
    },{
      firstName: "Jasmin",
      lastName: "Klein",
      class: "6A"
    }];
    this.defaultTeachers = [{
      firstName: "admin",
      lastName: "admin",
      mail: "admin@gmail.com",
      password: "admin"
    },{
      firstName: "Hans",
      lastName: "Jürgen",
      mail: "hansjuergen@gmail.com",
      password: "hansi56"
    },{
      firstName: "Magrid",
      lastName: "Hedel",
      mail: "magridhedel@gmail.com",
      password: "magdi23r"
    }];
    this.defaultClasses = [{
      level: 5,
      name: "A"
    },{
      level: 6,
      name: "A"
    }];
    this.defaultNotes = [{
      date: "2017-08-13T15:15:05.036Z",
      note: "Hausaufgaben vergessen",
      student: "NiklasDietz",
      teacher: "Hans Jürgen"
    },{
      date: "2017-08-13T15:15:05.036Z",
      note: "Zu spät gekommen",
      student: "AlisaNeuer",
      teacher: "Hans Jürgen"
    }]
  }
  

  ngOnInit() {
    this.getClass();
    this.getStudent();
    if(JSON.parse(localStorage.getItem("class")) == null && JSON.parse(localStorage.getItem("students")) == null && JSON.parse(localStorage.getItem("notes")) == null ){
      this.openSnackBar("Tabellen mit Beispieldaten füllen?", "Ja");              
    }    
  }

  private openSnackBar(message: string, action: string) {
    let snackBarRef = this.snackBar.open(message, action, {
      duration: 8000,
    });
    snackBarRef.onAction().subscribe(() =>{
      localStorage.setItem("students", JSON.stringify(this.defaultStudents));
      localStorage.setItem("teachers", JSON.stringify(this.defaultTeachers));
      localStorage.setItem("note", JSON.stringify(this.defaultNotes));
      localStorage.setItem("class", JSON.stringify(this.defaultClasses));
      
      this.getClass();
      this.getStudent();
    })
  }

  private getClass(){
    this.class = JSON.parse(localStorage.getItem("class"));
  }

  private getStudent(){
    this.student = JSON.parse(localStorage.getItem("students"));
  }
}
