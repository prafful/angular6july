import { Component, OnInit } from '@angular/core';
import { CustomRemoteServiceService } from '../../services/custom-remote-service.service';


@Component({
  selector: 'cts-consume-remote-servic',
  templateUrl: './consume-remote-servic.component.html',
  styleUrls: ['./consume-remote-servic.component.css']
})
export class ConsumeRemoteServicComponent implements OnInit {

  constructor(private remoteService:CustomRemoteServiceService) { }

  ngOnInit() {
    this.getRemoteData()
  }

  getRemoteData = function(){
    this.remoteService.getRemoteData().subscribe(
      (user)=>{
        console.log(user)
      }
    )
  }

}
