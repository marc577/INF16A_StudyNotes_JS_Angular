import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { ClassComponent } from './class/class.component';
import { NoteComponent } from './note/note.component';
import { NewComponent } from './teacher/new/new.component';
import { EditComponent } from './teacher/edit/edit.component';
import { NewstudentComponent } from './student/newstudent/newstudent.component';
import { EditstudentComponent } from './student/editstudent/editstudent.component';
import { EditclassComponent } from './class/editclass/editclass.component';
import { NewclassComponent } from './class/newclass/newclass.component';
import { NewnoteComponent } from './note/newnote/newnote.component';
import { EditnoteComponent } from './note/editnote/editnote.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent, TeacherComponent, StudentComponent, ClassComponent, NoteComponent, NewComponent, EditComponent, NewstudentComponent, EditstudentComponent, EditclassComponent, NewclassComponent, NewnoteComponent, EditnoteComponent]
})
export class DashboardModule { }
