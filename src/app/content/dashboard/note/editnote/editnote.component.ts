import { Component, OnInit, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-editnote',
  templateUrl: './editnote.component.html'
})
export class EditnoteComponent implements OnInit {

  private studentControl = new FormControl();
  private date: Date;
  private note: string;
  private currentUser: string;
  private student: string;
  private allStudents = [];
  private allStudentsData = [];
  private filteredOptions: Observable<string[]>;

  constructor(
    public dialogRef: MdDialogRef<EditnoteComponent>,
    @Inject(MD_DIALOG_DATA) public data: any) {
  }

  ngOnInit(
  ) {
    this.getStudents();
    this.filteredOptions = this.studentControl.valueChanges
      .startWith(null)
      .map(val => val ? this.filter(val) : this.allStudents.slice());

  }

  private editNote() {
    var items = JSON.parse(localStorage.getItem("note"));
    var editNote = {
      'date': new Date(),
      'note': this.note,
      'teacher': this.getCurrentUser(),
      'student': items[this.data.index].student
    };
    items[this.data.index] = editNote;
    items = JSON.stringify(items);
    localStorage.setItem("note", items);
  }

  private getStudents() {
    this.allStudentsData = JSON.parse(localStorage.getItem("students"));
    for (let i = 0; i < this.allStudentsData.length; i++) {
      this.allStudents[i] = this.allStudentsData[i].firstName + this.allStudentsData[i].lastName;
    }
  }

  private getCurrentUser(): string {
    return localStorage.getItem("currentUser");
  }

  private filter(val: string): string[] {
    return this.allStudents.filter(option => new RegExp(`^${val}`, 'gi').test(option));
  }

}

