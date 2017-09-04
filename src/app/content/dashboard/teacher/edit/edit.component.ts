import { Component, OnInit, Inject } from '@angular/core';
import {MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {
  private firstname:string;
  private lastname:string;
  private mail:string;
  private password:string;

  constructor(
    public dialogRef: MdDialogRef<EditComponent>,
    @Inject(MD_DIALOG_DATA) public data: any) {
  }
emailFormControl = new FormControl('', [
    Validators.pattern(EMAIL_REGEX)]);

  ngOnInit() {
  }
  private editTeacher(){
    var items = JSON.parse(localStorage.getItem("teachers")); 
    var editTeacher = {
    'firstName': this.firstname,
    'lastName': this.lastname,
    'mail': this.mail,
    'password': this.password
    };
    items[this.data.index] = editTeacher;
    items = JSON.stringify(items);
    localStorage.setItem("teachers", items);

    
  }

}
