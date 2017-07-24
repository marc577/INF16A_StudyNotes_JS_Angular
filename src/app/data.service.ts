import { Injectable } from '@angular/core';

export class Student {
  name: String;
  lastName: String;
  id: number;
  active = true;
  courses:Course[] = [];

  constructor(name: String, lastName: String, id: number){
    this.name = name;
    this.lastName = lastName;
    this.id = id;
  }
  public kickStudent(){
    this.active = false;
  }
}
export class Course {
  name: String;
  constructor(name: String){
    this.name = name;
  }
}

@Injectable()
export class DataService {

  students: Student[] = [];
  courses: Course[] = [];

  constructor() {
    if(localStorage.getItem("students") == null){
       let s:Student = new Student("Krieg", "Alexander", 123456);
       this.students.push(s);
       this.students.push(new Student("Ulli", "Höööööneß", 654321));
       this.students.push(new Student("Hans", "Sapei", 42));
       this.students.push(new Student("Berti", "Vogts", 43));
    }else{
      this.get();
    }

  }
  save() {
    localStorage.setItem("students", JSON.stringify(this.students));
    localStorage.setItem("courses", JSON.stringify(this.courses));
  }
  get(){
    this.students = JSON.parse(localStorage.getItem("students"));
    if(localStorage.getItem("courses") != null){
      this.courses = JSON.parse(localStorage.getItem("courses"));
    }

  }

}
