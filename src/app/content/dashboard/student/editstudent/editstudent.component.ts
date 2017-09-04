import { Component, OnInit, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html'
})
export class EditstudentComponent implements OnInit {
  private firstName: string;
  private lastName: string;
  private class: string;
  private allClass = [];
  private allClassOnlyName = [];
  private content = {};

  constructor(
    public dialogRef: MdDialogRef<EditstudentComponent>,
    @Inject(MD_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.getClass();
  }

  private editStudent() {
    var items = JSON.parse(localStorage.getItem("students"));
    var editStudent = {
      'firstName': this.firstName + " ",
      'lastName': this.lastName,
      'class': this.class,
    };
    items[this.data.index] = editStudent;
    items = JSON.stringify(items);
    localStorage.setItem("students", items);
  }

  private getClass() {
    this.allClass = JSON.parse(localStorage.getItem("class"));

    for (let i = 0; i < this.allClass.length; i++) {
      this.content = {
        'value': this.allClass[i].level + this.allClass[i].name
      }
      this.allClassOnlyName[i] = this.content;
    }
  }
}
