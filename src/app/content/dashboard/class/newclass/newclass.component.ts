import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-newclass',
  templateUrl: './newclass.component.html'
})
export class NewclassComponent implements OnInit {

  private level: number;
  private name: string;
  private regex = new RegExp("[A-Za-z]");

  constructor(private snackBar: MdSnackBar) { }

  private newClass() {
    if (this.level != null && this.name != null && this.level != 0 && this.regex.test(this.name)) {
      var oldClass = JSON.parse(localStorage.getItem('class')) || [];
      var newClass = {
        'level': this.level,
        'name': this.name,
      };

      oldClass.push(newClass);
      localStorage.setItem('class', JSON.stringify(oldClass));
      window.location.reload();
    }
    else {
      this.snackBar.open("Eingabe fehlerhaft!", "Okay", {
        duration: 3000,
      });
    }
  }

  ngOnInit() {
  }

}
