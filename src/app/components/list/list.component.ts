import { RequestService } from './../../services/request.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  objects = [];

  constructor(private requestService: RequestService) { 
    this.getObjects();
  }

  ngOnInit() {
  }

  getObjects() {
    this.requestService.get('').subscribe(
      data => {
        this.objects = data;
    }, error => {
        alert(error)
    });
  }

}
