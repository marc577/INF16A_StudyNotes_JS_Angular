import { Component, OnInit, EventEmitter, Output, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA, MdSnackBar } from '@angular/material';
import { Note, Student, StorageService } from '../../../../storage.service';




@Component({
  selector: 'app-newnote',
  templateUrl: './newnote.component.html'
})
export class NewnoteComponent implements OnInit {
  private studentControl = new FormControl();
  private date: Date;
  private note: string;
  private currentUser: string;
  private student: Student;
  private studentID:Number;
  private allStudents = [];
  private allStudentsData = [];
  private filteredOptions: Observable<string[]>;
  private regex = new RegExp('[A-Za-z0-9]');

  constructor(@Inject(MD_DIALOG_DATA) public data: any,public snackBar: MdSnackBar,private service:StorageService ) { }

  ngOnInit(
  ) {
    if(this.data && this.data.student){
      this.student = this.data.student;
      this.studentID = this.student.id;
    }
    this.getStudents();
    
    // this.filteredOptions = this.studentControl.valueChanges
    //   .startWith(null)
    //   .map(val => val ? this.filter(val) : this.allStudents.slice());

  }

  private newNote() {
    if (this.note != null && this.studentID != null && this.regex.test(this.note)) {
      this.service.addNote(this.studentID, this.note, this.getCurrentUser());
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
    this.allStudentsData = this.service.getStudents();
    for (let i = 0; i < this.allStudentsData.length; i++) {
      this.allStudents[i] = this.allStudentsData[i].firstName + this.allStudentsData[i].lastName;
    }
  }

  private filter(val: string): string[] {
    return this.allStudents.filter(option => new RegExp(`^${val}`, 'gi').test(option));
  }

}
