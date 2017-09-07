import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA } from '@angular/material';
import { EditComponent } from './edit/edit.component'
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html'
})
export class TeacherComponent implements OnInit {

  private teacher = [];
  private sideName: string;
  private searchtext: string;

  constructor(public dialog: MdDialog, private snack: MdSnackBar) {
    this.sideName = "Lehrer";
  }

  ngOnInit() {
    this.getTeacher();
  }

  private editTeacher(i: number) {
    let dialogRef = this.dialog.open(EditComponent, {
      data: { index: i }
    });
    dialogRef.afterClosed().subscribe(res => {
      this.getTeacher();
    });
  }

  private deleteTeacher(i: number) {
    var items = JSON.parse(localStorage.getItem("teachers"));
    items.splice(i, 1);
    items = JSON.stringify(items);
    localStorage.setItem("teachers", items);
    this.getTeacher();
  }

  public getTeacher() {
    this.teacher = JSON.parse(localStorage.getItem("teachers"));
  }

  private showPassword(i: number) {
    if (localStorage.getItem("currentUser") == this.teacher[i].firstName + " " + this.teacher[i].lastName) {
      this.snack.open(this.teacher[i].password, "Okay", {
        duration: 3000,
      });
    }
    else {
      this.snack.open("Keine Berechtigung", "Okay", {
        duration: 2000,
      });
    }
  }
}

@Component({
  selector: 'editTeacherDialog',
  templateUrl: './edit/edit.component.html',
})
export class editTeacherDialog { }
