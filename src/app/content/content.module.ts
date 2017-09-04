import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ContentComponent, SidebarComponent, DashboardComponent, HomeComponent, NavbarComponent, FooterComponent]
})
export class ContentModule { }
