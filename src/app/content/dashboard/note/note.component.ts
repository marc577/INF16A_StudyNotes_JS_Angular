import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA } from '@angular/material';
import { EditnoteComponent } from './editnote/editnote.component'



@Component({
  selector: 'app-note',
  templateUrl: './note.component.html'
})
export class NoteComponent implements OnInit {
  private sideName:string;
  private note = [];

  constructor(public dialog: MdDialog) {
    this.sideName = "Notizen";
   }


  ngOnInit() {
    this.getNote();
  }

  private editNote(i: number) {
    let dialogRef = this.dialog.open(EditnoteComponent, {
      data: { index: i }
    });
    dialogRef.afterClosed().subscribe(res => {
      this.getNote();
    });
  }

  private deleteNote(i: number) {
    var items = JSON.parse(localStorage.getItem("note"));
    items.splice(i, 1);
    items = JSON.stringify(items);
    localStorage.setItem("note", items);
    this.getNote();
  }

  public getNote(){
    this.note = JSON.parse(localStorage.getItem("note"));
  }
}
