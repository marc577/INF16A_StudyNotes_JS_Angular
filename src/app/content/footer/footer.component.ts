import { Component, OnInit, Input } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import { NewComponent } from '../dashboard/teacher/new/new.component';
import { NewstudentComponent } from '../dashboard/student/newstudent/newstudent.component';
import { NewclassComponent } from '../dashboard/class/newclass/newclass.component';
import { NewnoteComponent } from '../dashboard/note/newnote/newnote.component';
import { Router } from '@angular/router'
import { TeacherComponent } from '../dashboard/teacher/teacher.component'
import { StudentComponent } from '../dashboard/student/student.component'
import { ClassComponent } from '../dashboard/class/class.component'
import { NoteComponent } from '../dashboard/note/note.component'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  private dialogRef;

  constructor(public dialog: MdDialog, private router:Router, private teacher: TeacherComponent, private student:StudentComponent, private classes: ClassComponent, private note: NoteComponent) {}

  private openDialog() {
    if(this.router.url.startsWith("/content/teacher")){
      this.dialogRef = this.dialog.open(NewComponent);
      this.dialogRef.afterClosed().subscribe(res => {
        this.teacher.getTeacher();
      });
    }
    if(this.router.url.startsWith("/content/student")){
      this.dialogRef = this.dialog.open(NewstudentComponent);
      this.dialogRef.afterClosed().subscribe(res => {
        this.student.getStudent();
      });
    }
    if(this.router.url.startsWith("/content/class")){
      this.dialogRef = this.dialog.open(NewclassComponent);
      this.dialogRef.afterClosed().subscribe(res => {
        this.classes.getClass();
      });
      
    }
    if(this.router.url.startsWith("/content/note")){
      this.dialogRef = this.dialog.open(NewnoteComponent);
      this.dialogRef.afterClosed().subscribe(res => {
        this.note.getNote();
      });
    }
    
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'newTeacherDialog',
  templateUrl: '../dashboard/teacher/new/new.component.html',
})
export class newTeacherDialog {}
