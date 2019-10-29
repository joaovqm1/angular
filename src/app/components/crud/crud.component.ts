import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  object = {
    text: '',
    number: 0,
    date: ''
  };

  inputs = [{
    type: 'text', placeholder: 'Texto', field: 'text', view: true
  }, {
    type: 'number', placeholder: 'Número', field: 'number'
  }, {
    type: 'date', placeholder: 'Data', field: 'date'
  }];

  constructor() { }

  ngOnInit() {
  }

  onSave() {
    console.log(this.object);
  }

}
