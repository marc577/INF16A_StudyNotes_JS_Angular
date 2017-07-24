
import { Component, OnInit } from '@angular/core';
import {DataService, Student} from "../data.service";

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styles: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  name:String = null;
  firstName:String = null;
  current:Student = null;

  constructor(public dataService:DataService) { }

  ngOnInit() {
  }

  addStudent(){
    this.dataService.students.push(new Student(this.name, this.firstName, 234));
    this.dataService.save();
    this.name = null;
  }
  edit(s: Student){
    this.current = s;
  }
  update(){
    this.dataService.save();
    this.current = null;
  }
  cancel(){
    this.current = null;
  }
  remove(){
    this.dataService.students = this.dataService.students.filter(x => x != this.current);

    /*let i = this.dataService.students.indexOf(this.current, 0);
    if(i > -1) {
      this.dataService.students.splice(i, 1);
    }*/

    this.update();
  }

}
