import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: 'app-lista-libri',
  templateUrl: './lista-libri.component.html',
  styleUrls: ['./lista-libri.component.css']
})
export class ListaLibriComponent implements OnInit {

  constructor(public service: SharedServiceService, private ngxService: NgxUiLoaderService) { }
  dati: any;
  text: string = "";
  count: any = 5;
  disableNext: boolean = false;
  disablePrevious: boolean = false;

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.ngxService.start();
    this.service.getLibri().subscribe((data: any) => {
      console.log(data);
      this.dati = data.items
      this.count = this.service.pageSize;
      this.ngxService.stop();
    })
  }

  getDetail(data: any) {
    this.service.getDataDetail(data)
  }

  numberOfBooks(digit: any) {
    this.service.pageSize = digit.target.value;
    this.count = this.service.pageSize;
    this.service.startingPage = 0;
    if (digit.target.value == 20) {
      console.log('inside 20');
      this.disableNext = true;
    }
    this.getData();
  }

  searchBook() {
    this.service.filterSearch
    this.getData();
  }

  nextPage() {
    console.log(this.service.pageSize, 'PAGE SIZE');

    if (this.service.pageSize == 5) {
      console.log(this.service.startingPage, 'STARTING PAGE SIZE');
      if (this.service.startingPage === 0 || this.service.startingPage === 5 || this.service.startingPage === 10 || this.service.startingPage === 15) {
        this.service.startingPage = this.service.startingPage + 5;
        this.count = this.service.startingPage + 5;
        this.getData();
        console.log(this.service.startingPage, 'STARTING PAGE');
        console.log(this.count, 'COUNT');
      }
    }
    if (this.service.pageSize == 10) {
      if (this.service.startingPage === 0 || this.service.startingPage === 10) {
        console.log('inside 10')
        this.service.startingPage = this.service.startingPage + 10;
        this.count = this.service.startingPage + 10;
        this.getData();
        console.log(this.service.startingPage, 'STARTING PAGE');
        console.log(this.count, 'COUNT');
        this.disableNext = true;
      }
    }
    if (this.service.pageSize == 15) {
      if (this.service.startingPage === 0) {
        this.service.startingPage = this.service.startingPage + 15;
        this.count = this.service.startingPage + 15;
        this.getData();
        console.log(this.service.startingPage, 'STARTING PAGE');
        console.log(this.count, 'COUNT');
      }
    }
    if (this.service.pageSize == 20) {
      if (this.service.startingPage === 0) {
        console.log(this.service.startingPage, 'STARTING PAGE');
        console.log(this.count, 'COUNT');
      }
    }
  }

  previousPage() {
    this.disableNext = false;
    if (this.service.pageSize == 5) {
      if (this.service.startingPage === 5 || this.service.startingPage === 10 || this.service.startingPage === 15) {
        this.service.startingPage = this.service.startingPage - 5;
        this.count = this.service.startingPage + 5;
        this.getData();
        console.log(this.service.startingPage, 'STARTING PAGE');
        console.log(this.count, 'COUNT');
      }
    }
    if (this.service.pageSize == 10) {
      if (this.service.startingPage === 0 || this.service.startingPage === 10) {
        this.service.startingPage = this.service.startingPage - 10;
        this.count = this.service.startingPage - 10;
        this.getData();
        console.log(this.service.startingPage, 'STARTING PAGE');
        console.log(this.count, 'COUNT');
      }
    }
    if (this.service.pageSize == 15) {
      if (this.service.startingPage === 15) {
        this.service.startingPage = this.service.startingPage - 15;
        this.count = this.service.startingPage + 15;
        this.getData();
        console.log(this.service.startingPage, 'STARTING PAGE');
        console.log(this.count, 'COUNT');
      }
    }
  }
}
