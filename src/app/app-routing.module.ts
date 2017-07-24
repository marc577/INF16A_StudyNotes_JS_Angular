import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HelloComponent} from './hello/hello.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DoCheckComponent} from "./do-check/do-check.component";
import {CourseComponent} from "./course/course.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'hello',
    component: HelloComponent
  },
  {
    path: 'course',
    component: CourseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
