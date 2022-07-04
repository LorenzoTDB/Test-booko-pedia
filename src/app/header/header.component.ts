import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service: SharedServiceService) { }

  ngOnInit(): void {
  }

  numberOfBooks(digit: number) {
    this.service.pageSize = digit;
  }

}
