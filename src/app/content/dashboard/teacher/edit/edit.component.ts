import { Component, OnInit, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA, MdSnackBar } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {
  private firstname: string;
  private lastname: string;
  private mail: string;
  private password: string;
  private regex = new RegExp("[A-Za-z]");
  private validateMail = new RegExp('[^\s@]+@[^\s@]+\.[^\s@]')

  constructor(
    public dialogRef: MdDialogRef<EditComponent>,
    @Inject(MD_DIALOG_DATA) public data: any, public snackBar: MdSnackBar) {
  }
  emailFormControl = new FormControl('', [
    Validators.pattern(EMAIL_REGEX)]);

  ngOnInit() {
    this.getTeacher();
  }

  private getTeacher() {
    var items = JSON.parse(localStorage.getItem("teachers"));

    this.firstname = items[this.data.index].firstName;
    this.lastname = items[this.data.index].lastName;
    this.mail = items[this.data.index].mail;
    this.password = items[this.data.index].password;
  }

  private editTeacher() {
    if (this.firstname != null && this.lastname != null && this.mail != null && this.password != null && this.regex.test(this.firstname) && this.regex.test(this.lastname)) {
      if (this.validateMail.test(this.mail)) {

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
      else {
        this.snackBar.open("E-Mail fehlerhaft!", "Okay", {
          duration: 3000,
        });
      }
    }
    else {
      this.snackBar.open("Eingabe fehlerhaft!", "Okay", {
        duration: 3000,
      });
    }

  }

}
