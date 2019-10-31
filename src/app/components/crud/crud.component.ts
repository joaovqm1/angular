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
    type: 'input', label: 'Texto', inputType: 'text', placeholder: 'Algum texto', field: 'text', view: true
  }, {
    type: 'input', label: 'Número', inputType: 'number', placeholder: '0', field: 'number'
  }, {
    type: 'input', label: 'Data', inputType: 'date',  field: 'date'
  }];

  constructor() { }

  ngOnInit() {
  }

  onSave() {
    console.log(this.object);
  }

}
