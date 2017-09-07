import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { MdSnackBar } from '@angular/material'


@Component({
  selector: 'app-newnote',
  templateUrl: './newnote.component.html'
})
export class NewnoteComponent implements OnInit {
  private studentControl = new FormControl();
  private date: Date;
  private note: string;
  private currentUser: string;
  private student: string;
  private allStudents = [];
  private allStudentsData = [];
  private filteredOptions: Observable<string[]>;
  private regex = new RegExp('[A-Za-z0-9]');

  constructor(public snackBar: MdSnackBar) { }

  ngOnInit(
  ) {
    this.getStudents();
    this.filteredOptions = this.studentControl.valueChanges
      .startWith(null)
      .map(val => val ? this.filter(val) : this.allStudents.slice());

  }

  private newNote() {
    if (this.note != null && this.student != null && this.regex.test(this.note)) {
      var oldNote = JSON.parse(localStorage.getItem('note')) || [];
      var newNote = {
        'date': new Date(),
        'note': this.note,
        'teacher': this.getCurrentUser(),
        'student': this.student
      };
      oldNote.push(newNote);
      localStorage.setItem('note', JSON.stringify(oldNote));
      window.location.reload();
    }
    else {
      this.snackBar.open("Eingabe fehlerhaft!", "Okay", {
        duration: 3000,
      });
    }
  }

  private getCurrentUser(): string {
    return localStorage.getItem("currentUser");
  }
  private getStudents() {
    this.allStudentsData = JSON.parse(localStorage.getItem("students"));
    for (let i = 0; i < this.allStudentsData.length; i++) {
      this.allStudents[i] = this.allStudentsData[i].firstName + this.allStudentsData[i].lastName;
    }
  }

  private filter(val: string): string[] {
    return this.allStudents.filter(option => new RegExp(`^${val}`, 'gi').test(option));
  }

}
