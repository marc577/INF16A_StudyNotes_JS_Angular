import { Component, OnInit, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA, MdSnackBar } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Note, Student, StorageService } from '../../../../storage.service';


@Component({
  selector: 'app-editnote',
  templateUrl: './editnote.component.html'
})
export class EditnoteComponent implements OnInit {

  private studentControl = new FormControl();
  private date: Date;
  private note: string;
  private currentUser: string;
  private student: Student;
  private studentID: Number;
  private allStudents = [];
  private allStudentsData = [];
  private filteredOptions: Observable<string[]>;
  private regex = new RegExp('[A-Za-z0-9]');

  constructor(
    public dialogRef: MdDialogRef<EditnoteComponent>,
    @Inject(MD_DIALOG_DATA) public data: any, public snackBar: MdSnackBar, private service:StorageService) {
  }

  ngOnInit(
  ) {
    this.getStudents();
    if(this.data && this.data.student){
      this.student = this.data.student;
      this.studentID = this.student.id;
    }
    if(this.data && this.data.note){
      this.note = this.data.note.note;
      this.studentID = this.data.note.idStudent;
    }

  }

  private editNote() {
    if (this.note != undefined  && this.studentID != null && this.regex.test(this.note)) {
      this.service.updateNote(this.data.note.id,this.note, this.getCurrentUser(),this.studentID);

    }
    else {
      this.snackBar.open("Eingabe fehlerhaft!", "Okay", {
        duration: 3000,
      });
    }
  }

  private getStudents() {

    this.allStudentsData = this.service.getStudents();
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

