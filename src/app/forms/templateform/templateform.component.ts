import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  

  constructor() { }

  ngOnInit() {
  }

  userData = function(v){
    console.log(v)
  }

}
