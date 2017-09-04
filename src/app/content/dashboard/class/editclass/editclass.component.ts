import { Component, OnInit, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-editclass',
  templateUrl: './editclass.component.html'
})
export class EditclassComponent implements OnInit {
  private name:string;
  private level:number;

  constructor(
    public dialogRef: MdDialogRef<EditclassComponent>,
    @Inject(MD_DIALOG_DATA) public data: any) {
  }

  private editClass() {
    var items = JSON.parse(localStorage.getItem("class"));
    var editClass = {
      'level': this.level,
      'name': this.name,
    };
    items[this.data.index] = editClass;
    items = JSON.stringify(items);
    localStorage.setItem("class", items);
  }

  ngOnInit() {
  }

}
