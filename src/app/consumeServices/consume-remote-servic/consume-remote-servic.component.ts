import { Component, OnInit } from '@angular/core';
import {CustomRemoteServiceService} from '../../services/custom-remote-service.service'


@Component({
  selector: 'cts-consume-remote-servic',
  templateUrl: './consume-remote-servic.component.html',
  styleUrls: ['./consume-remote-servic.component.css']
})
export class ConsumeRemoteServicComponent implements OnInit {

  receivedData
  constructor(private remoteService:CustomRemoteServiceService) { }

  ngOnInit() {
    this.getRemoteData()
  }

  getRemoteData(){
    this.remoteService.getRemoteData().subscribe(
      (remoteData)=>{
        console.log("calling remote data after subscription")
        console.log(remoteData)
        this.receivedData = remoteData
        console.log(this.receivedData)
      }
    )
  }

  createUser(jsonUser){
    var name  = jsonUser.name
    var username = jsonUser.username
    var email = jsonUser.email
    this.remoteService.createRemoteUser(name, username, email).subscribe(
      (response)=>{
        console.log("user Added Successfully!!!")
      })
  }

 

}
