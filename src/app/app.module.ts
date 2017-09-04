import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ContentComponent } from './content/content.component';
import { UserServiceService } from './user-service.service';
import { SidebarComponent } from './content/sidebar/sidebar.component';
import { DashboardComponent } from './content/dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { NavbarComponent } from './content/navbar/navbar.component';
import { FooterComponent } from './content/footer/footer.component';
import { MdButtonModule, MdChipsModule, MdSnackBarModule, MdAutocompleteModule, MdSelectModule, MdTableModule, MdMenuModule, MdDialogModule, MdCheckboxModule, MdCardModule, MdProgressSpinnerModule, MdIconModule, MdInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './content/dashboard/home/home.component';
import { CdkTableModule } from '@angular/cdk';
import { TeacherComponent } from './content/dashboard/teacher/teacher.component';
import { StudentComponent } from './content/dashboard/student/student.component';
import { ClassComponent } from './content/dashboard/class/class.component';
import { NoteComponent } from './content/dashboard/note/note.component';
import { NewComponent } from './content/dashboard/teacher/new/new.component';
import { EditComponent } from './content/dashboard/teacher/edit/edit.component';
import { EditstudentComponent } from './content/dashboard/student/editstudent/editstudent.component';
import { NewstudentComponent } from './content/dashboard/student/newstudent/newstudent.component';
import { EditclassComponent } from './content/dashboard/class/editclass/editclass.component';
import { NewclassComponent } from './content/dashboard/class/newclass/newclass.component';
import { EditnoteComponent } from './content/dashboard/note/editnote/editnote.component';
import { NewnoteComponent } from './content/dashboard/note/newnote/newnote.component';
import { SearchFilterPipe } from './content/filter/searchfilter.pipe';
import 'hammerjs';


const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'content',
    canActivate: [AuthGuard],
    component: ContentComponent,
    children: [{
      path: 'home',
      component: HomeComponent,
    },
    {
      path: 'teacher',
      component: TeacherComponent,
    },
    {
      path: 'student',
      component: StudentComponent,
    },
    {
      path: 'note',
      component: NoteComponent,
    },
    {
      path: 'class',
      component: ClassComponent,
    }
    ]

  },
]


@NgModule({
  declarations: [
    AppComponent,SearchFilterPipe, LoginComponent, EditnoteComponent, NewnoteComponent, EditclassComponent, NewclassComponent, EditstudentComponent, NewstudentComponent, NewComponent, EditComponent, TeacherComponent, StudentComponent, ClassComponent, NoteComponent, ContentComponent, DashboardComponent, SidebarComponent, HomeComponent, NavbarComponent, FooterComponent
  ],
  imports: [
    BrowserModule,MdChipsModule, MdAutocompleteModule, MdSnackBarModule, ReactiveFormsModule, MdSelectModule, CdkTableModule, MdDialogModule, MdTableModule, MdInputModule, MdIconModule, MdCardModule, MdMenuModule, MdCheckboxModule, MdProgressSpinnerModule, MdButtonModule, FormsModule, RouterModule.forRoot(appRoutes), BrowserAnimationsModule
  ],
  providers: [ UserServiceService, AuthGuard, TeacherComponent, StudentComponent, ClassComponent, NoteComponent],
  bootstrap: [AppComponent],
  entryComponents: [NewComponent, EditComponent, EditstudentComponent, NewstudentComponent, NewclassComponent, EditclassComponent, EditnoteComponent, NewnoteComponent]
})
export class AppModule { }
