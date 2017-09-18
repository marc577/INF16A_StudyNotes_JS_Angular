import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA } from '@angular/material';
import { EditstudentComponent } from './editstudent/editstudent.component'
import { NewnoteComponent } from '../note/newnote/newnote.component';
import { SearchFilterPipe } from './../../filter/searchfilter.pipe';
import { Router, ActivatedRoute } from '@angular/router';
import { Student, StorageService } from '../../../storage.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html'
})
export class StudentComponent implements OnInit {

  private students= [];
  private note = [];
  private sideName:string;
  private searchText: string;

  constructor(public dialog: MdDialog, private router:Router, private sService:StorageService, private route:ActivatedRoute) {
    this.sideName = "Schüler";
   }

  ngOnInit() {
    this.getNote();
    this.getStudent();
    this.sService.getEmitter().subscribe(item => {
        if(item.name === "students"){
          this.getStudent();
        }
        if(item.name === "notes"){
          this.getNote();
        }
    });
    this.route
    .queryParams
    .subscribe(params => {
        this.searchText = params["filter"];
      });
  }

  private editStudent(i: number) {
    let dialogRef = this.dialog.open(EditstudentComponent, {
      data: {id: i}
    });
    dialogRef.afterClosed().subscribe(res => {
      this.getStudent();
    });
  }

  private deleteStudent(i: number) {
    this.sService.deleteStudent(i);
  }

  public getStudent(){
    this.students = this.sService.getStudents();
  }

  private getNote(){
    this.note = this.sService.getNotes();
  }

  private showNotes(s:Student){
    let name = s.firstName +" "+ s.lastName;
    this.router.navigate(['content/note'], {queryParams: {student: name}});
  }

  private setNote(i:Student){
    let dialogNote = this.dialog.open(NewnoteComponent, {
      data: {student: i}
    });
    dialogNote.afterClosed().subscribe(res => {
      this.getStudent();
      this.getNote();
    });
  }
}
