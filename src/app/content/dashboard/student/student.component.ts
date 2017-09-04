import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA } from '@angular/material';
import { EditstudentComponent } from './editstudent/editstudent.component'
import { NewnoteComponent } from '../note/newnote/newnote.component';
import { SearchFilterPipe } from './../../filter/searchfilter.pipe'

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html'
})
export class StudentComponent implements OnInit {

  private student = [];
  private note = [];
  private sideName:string;
  private searchtext: string;

  constructor(public dialog: MdDialog) {
    this.sideName = "Schüler";
   }

  ngOnInit() {
    this.getNote();
    this.getStudent();
  }

  private editStudent(i: number) {
    let dialogRef = this.dialog.open(EditstudentComponent, {
      data: { index: i }
    });
    dialogRef.afterClosed().subscribe(res => {
      this.getStudent();
    });
  }

  private deleteStudent(i: number) {
    var items = JSON.parse(localStorage.getItem("students"));
    items.splice(i, 1);
    items = JSON.stringify(items);
    localStorage.setItem("students", items);
    this.getStudent();
  }

  public getStudent(){
    this.student = JSON.parse(localStorage.getItem("students"));
  }

  private getNote(){
    this.note = JSON.parse(localStorage.getItem("note"));
  }

  private setNote(){
    let dialogNote = this.dialog.open(NewnoteComponent);
    dialogNote.afterClosed().subscribe(res => {
      this.getStudent();
      this.getNote();
    });
  }
}
