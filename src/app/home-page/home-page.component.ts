import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private service: SharedServiceService) { }

  ngOnInit(): void {
    this.service.pageSize = 5;
    this.service.filterSearch = '';
  }

}
