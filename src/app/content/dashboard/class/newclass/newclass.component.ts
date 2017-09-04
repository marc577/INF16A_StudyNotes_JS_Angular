import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-newclass',
  templateUrl: './newclass.component.html'
})
export class NewclassComponent implements OnInit {

  private level:number;
  private name:string;

  constructor() { }

  private newClass(){
    if(this.level != null && this.name != null ){
      var oldClass = JSON.parse(localStorage.getItem('class')) || [];
    var newClass = {
    'level': this.level,
    'name': this.name,
    };

    oldClass.push(newClass);
    localStorage.setItem('class', JSON.stringify(oldClass));
    }
    }

  ngOnInit() {
  }

}
