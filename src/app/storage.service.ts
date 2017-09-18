import { Injectable } from '@angular/core';
import { EventEmitter} from '@angular/core';


export class Student {
  constructor(public firstName:String, public lastName:String, public course:String, public id:number){}
}
export class Note {
  constructor(public id, public idStudent:Number, public teacher:String, public note:String, public date:Date){}
}



@Injectable()
export class StorageService {

  public students:Student[];
  public notes:Note[];
  private dispatcher: EventEmitter<any> = new EventEmitter();

  constructor() { 
    this.getStudents();
    this.getNotes();
  }

  public getStudents(): Student[]{
    var storageString = localStorage.getItem("students");
    this.students = [];
    if(storageString){
      this.students = JSON.parse(storageString);
    }
    return this.students;
  }
  public getNotes(): Note[]{
    var storageString = localStorage.getItem("note");
    this.notes = [];
    if(storageString){
      this.notes = JSON.parse(storageString);
    }
    return this.notes;
  }

  private createStudentID(){
      var maxID = 0;
      for(let s of this.students){
        if(s.id > maxID){
          maxID = s.id;
        }
      }
      maxID += 1;
      return maxID;
  }
  private createNoteID(){
    var maxID = 0;
    for(let s of this.notes){
      if(s.id > maxID){
        maxID = s.id;
      }
    }
    maxID += 1;
    return maxID;
}
  public updateStudent(id:number, firstName:string, lastName:string, course:string){
    var s = this.getStudent(id);
    s.firstName = firstName;
    s.lastName = lastName;
    s.course = course;
    this.save();
  }
  public updateNote(id:number, note:string, teacher:string, idStudent:Number){
    var s = this.getNote(id);
    s.note = note;
    s.teacher = teacher;
    s.idStudent = idStudent;
    this.save();
  }
  public addStudent(firstName:String, lastName:String, course:String){
    let id = this.createStudentID();
    this.students.push(new Student(firstName, lastName, course, id));
    this.save();
    this.emitMessageEvent("students", this.students);
  }
  public addNote(idStudent:Number, note:String, teacher:String){
    let id = this.createNoteID();
    let n = new Note(id,idStudent,teacher,note,new Date());
    this.notes.push(n);
    this.save();
    this.emitMessageEvent("notes", this.students);
  }
  public deleteStudent(id:number){
    for(let s of this.students){
      if(id === s.id){
        var index = this.students.indexOf(s, 0);
        if (index > -1) {
          this.students.splice(index, 1);
        }
        break;
      }
    }
    this.save();
    this.emitMessageEvent("students", this.students);
  }
  public deleteNote(id:number){
    for(let s of this.notes){
      if(id === s.id){
        var index = this.notes.indexOf(s, 0);
        if (index > -1) {
          this.notes.splice(index, 1);
        }
        break;
      }
    }
    this.save();
    this.emitMessageEvent("notes", this.notes);
  }
  public getStudent(id:number):Student{
    for(let s of this.students){
      if(id === s.id){
        return s;
      }
    }
    return null;
  }
  public getNote(id:number):Note{
    for(let s of this.notes){
      if(id === s.id){
        return s;
      }
    }
    return null;
  }
  public getEmitter() {
    return this.dispatcher;
  }
  private emitMessageEvent(name:string, data:any){
    this.dispatcher.emit({name:name, data:data});
  }
  private save(){
    localStorage.setItem("students", JSON.stringify(this.students));
    localStorage.setItem("note", JSON.stringify(this.notes));
  }

}
