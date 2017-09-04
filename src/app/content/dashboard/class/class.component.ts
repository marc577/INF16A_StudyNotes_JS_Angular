import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA } from '@angular/material';
import { EditclassComponent } from './editclass/editclass.component'


@Component({
  selector: 'app-class',
  templateUrl: './class.component.html'
})
export class ClassComponent implements OnInit {

  private sideName:string;
  private class = [];
  private searchtext: string;

   constructor(public dialog: MdDialog) {
    this.sideName = "Klassen";
   }

  ngOnInit() {
    this.getClass();
  }

  private editClass(i: number) {
    let dialogRef = this.dialog.open(EditclassComponent, {
      data: { index: i }
    });
    dialogRef.afterClosed().subscribe(res => {
      console.log("a");
      this.getClass();
    });
  }

  private deleteClass(i: number) {
    var items = JSON.parse(localStorage.getItem("class"));
    items.splice(i, 1);
    items = JSON.stringify(items);
    localStorage.setItem("class", items);
    this.getClass();
  }

  public getClass(){
    this.class = JSON.parse(localStorage.getItem("class"));
  }

}
