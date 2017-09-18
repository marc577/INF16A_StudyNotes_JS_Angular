import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA } from '@angular/material';
import { EditnoteComponent } from './editnote/editnote.component'
import { Router, ActivatedRoute } from '@angular/router';
import { Student, Note, StorageService} from '../../../storage.service';



@Component({
  selector: 'app-note',
  templateUrl: './note.component.html'
})
export class NoteComponent implements OnInit {
  private sideName:string;
  private note = [];
  private actualStudent: string;
  private searchText: string;

  constructor(public dialog: MdDialog, private route:ActivatedRoute, private service:StorageService) {
    this.sideName = "Notizen";
   }


  ngOnInit() {
    this.getNote();
    this.route
    .queryParams
    .subscribe(params => {
        this.actualStudent = params["student"];
        this.searchText = this.actualStudent;
      });
      this.service.getEmitter().subscribe(item => {
        if(item.name === "notes"){
          this.getNote();
        }
    });
  }

  private editNote(n: Note) {
    let dialogRef = this.dialog.open(EditnoteComponent, {
      data: { note: n}
    });
    dialogRef.afterClosed().subscribe(res => {
      this.getNote();
    });
  }

  private deleteNote(n: Note) {
    this.service.deleteNote(n.id);
    this.getNote()
  }

  public getNote(){
    this.note = this.service.getNotes();
    for(var i = 0; i < this.note.length; i++){
      this.note[i].sName = this.getStudentName(this.note[i].idStudent);
    }
  }
  private getStudentName(id:number){
    let s = this.service.getStudent(id);
    return s.firstName + " " + s.lastName;
  }
}
