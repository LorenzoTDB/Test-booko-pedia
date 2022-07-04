import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-dettaglio-libri',
  templateUrl: './dettaglio-libri.component.html',
  styleUrls: ['./dettaglio-libri.component.css']
})
export class DettaglioLibriComponent implements OnInit {

  constructor(public service: SharedServiceService) { }

  ngOnInit(): void {
    console.log(this.service.dataDetail)
  }

}
