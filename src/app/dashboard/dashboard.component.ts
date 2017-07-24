import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  name = 'DashboardComponent';

  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

  setValue() {
    //this.dataService.name = this.name;
  }
}
