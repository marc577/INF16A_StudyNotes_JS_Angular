import { Component, OnInit, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA, MdSnackBar } from '@angular/material';


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
  private regex = new RegExp("[A-Za-z]");

  constructor(
    public dialogRef: MdDialogRef<EditstudentComponent>,
    @Inject(MD_DIALOG_DATA) public data: any, public snackBar:MdSnackBar) {
  }

  ngOnInit() {
    this.getClass();
  }

  private editStudent() {
    if(this.firstName != null && this.lastName != null && this.class != null && this.regex.test(this.firstName) && this.regex.test(this.lastName)){
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
    else{
      this.snackBar.open("Eingabe fehlerhaft!", "Okay", {
        duration: 3000,
      });
    }
    
  }

  private getClass() {
    this.allClass = JSON.parse(localStorage.getItem("class"));    
    var items = JSON.parse(localStorage.getItem("students"));
    
    this.firstName = items[this.data.index].firstName;
    this.lastName = items[this.data.index].lastName;
    this.class = items[this.data.index].class;

    for (let i = 0; i < this.allClass.length; i++) {
      this.content = {
        'value': this.allClass[i].level + this.allClass[i].name
      }
      this.allClassOnlyName[i] = this.content;
    }
  }
}
