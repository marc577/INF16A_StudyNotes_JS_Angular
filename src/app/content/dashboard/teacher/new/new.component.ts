import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html'
})
export class NewComponent implements OnInit {
  private firstname: string;
  private lastname: string;
  private mail: string;
  private password: string;

  constructor() { }
  emailFormControl = new FormControl('', [
  Validators.pattern(EMAIL_REGEX)]);

  ngOnInit() {
  }

  private newTeacher() {
    if (this.firstname != null && this.lastname != null && this.mail != null && this.password != null) {
      var oldTeacher = JSON.parse(localStorage.getItem('teachers')) || [];
      var newTeacher = {
        'firstName': this.firstname,
        'lastName': this.lastname,
        'mail': this.mail,
        'password': this.password
      };

      oldTeacher.push(newTeacher);
      localStorage.setItem('teachers', JSON.stringify(oldTeacher));
    }
  }
}
