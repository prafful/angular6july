import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'cts-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  clickedID

  constructor(private activeRoute:ActivatedRoute) { 
    this.activeRoute.params.subscribe(
      (receivedID)=>{
        console.log(receivedID)
        this.clickedID = receivedID.id
      })
  }

  ngOnInit() {
  }

}
