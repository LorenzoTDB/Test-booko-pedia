import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  filterSearch: string = "";
  url: string = "https://www.googleapis.com/books/v1/volumes?";
  dataDetail: any;
  startingPage: any = 0;
  pageSize: any = 5;
  searchKey: string = '';

  constructor(private httpClient: HttpClient) { }

  getLibri() {
    return this.httpClient.get(this.url + 'startIndex=' + this.startingPage + '&maxResults=' + this.pageSize + '&q={' + this.filterSearch + '}');
  }

  getDataDetail(data: any) {
    this.dataDetail = data
  }

}
