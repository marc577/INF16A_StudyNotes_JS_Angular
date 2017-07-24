import { Component, OnInit } from '@angular/core';
import {DataService, Course} from "../data.service";


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styles: []
})
export class CourseComponent implements OnInit {

  name:String = null;
  current:Course = null;

  constructor(public dataService:DataService) { }

  ngOnInit() {
  }

  addCourse(){
    //console.log("id0gfhudogfödougfödougföoudgföougöou");
    this.dataService.courses.push(new Course(this.name));
    this.dataService.save();
    this.name = null;
  }
  edit(s: Course){
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
    this.dataService.courses = this.dataService.courses.filter(x => x != this.current);

    /*let i = this.dataService.students.indexOf(this.current, 0);
     if(i > -1) {
     this.dataService.students.splice(i, 1);
     }*/

    this.update();
  }

}
