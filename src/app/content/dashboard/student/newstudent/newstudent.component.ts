import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-newstudent',
  templateUrl: './newstudent.component.html'
})
export class NewstudentComponent implements OnInit {
  private firstName:string;
  private lastName:string;
  private class:string;
  private allClass = [];
  private allClassOnlyName = [];
  private content = {};

  constructor() { }

  ngOnInit() {
    this.getClass();
  }

  private newStudent(){
    if(this.firstName != null && this.lastName != null && this.class != null ){
      var oldStudent = JSON.parse(localStorage.getItem('students')) || [];
    var newStudent = {
    'firstName': this.firstName+" ",
    'lastName': this.lastName,
    'class': this.class
    };

    oldStudent.push(newStudent);
    localStorage.setItem('students', JSON.stringify(oldStudent));
    }
    }
    private getClass(){
      this.allClass = JSON.parse(localStorage.getItem("class"));
    
      for(let i=0; i<this.allClass.length; i++){
        this.content = {
          'value': this.allClass[i].level + this.allClass[i].name
        }
        this.allClassOnlyName[i] = this.content;
      }
  }
}
