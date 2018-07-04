import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-mypipecomponent',
  templateUrl: './mypipecomponent.component.html',
  styleUrls: ['./mypipecomponent.component.css']
})
export class MypipecomponentComponent implements OnInit {

  location = 'chennai'
  message= 'check if this works'
  today = new Date()
  salary = 1000

  friends = ['manu','tonu','onu','zonu','donu']

  scores = [10,20,5,8,9,2,99,2,4,1,18,15]


  constructor() { }

  ngOnInit() {
  }

}
