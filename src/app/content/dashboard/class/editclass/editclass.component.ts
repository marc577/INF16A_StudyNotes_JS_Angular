import { Component, OnInit, Inject } from '@angular/core';
import { MdDialog, MdSnackBar, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-editclass',
  templateUrl: './editclass.component.html'
})
export class EditclassComponent implements OnInit {
  private name:string;
  private level:number;
  private regex = new RegExp("[A-Za-z]");

  constructor(
    public dialogRef: MdDialogRef<EditclassComponent>,
    @Inject(MD_DIALOG_DATA) public data: any, public snackBar:MdSnackBar) {
  }

  private editClass() {
    if(this.level != null && this.name != null && this.regex.test(name)){
    var items = JSON.parse(localStorage.getItem("class"));
    var editClass = {
      'level': this.level,
      'name': this.name,
    };
    items[this.data.index] = editClass;
    items = JSON.stringify(items);
    localStorage.setItem("class", items);
  }
  else{
    this.snackBar.open("Eingabe fehlerhaft!", "Okay", {
      duration: 3000,
    });
  }
}


  ngOnInit() {
    var items = JSON.parse(localStorage.getItem("class"));
    this.level = items[this.data.index].level;
    this.name = items[this.data.index].name;
  }

}
