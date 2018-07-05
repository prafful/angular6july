import { Component, OnInit } from '@angular/core';
import { CustomLocalServiceService } from '../../services/custom-local-service.service'

@Component({
  selector: 'cts-consumeservice2',
  templateUrl: './consumeservice2.component.html',
  styleUrls: ['./consumeservice2.component.css']
})
export class Consumeservice2Component implements OnInit {

  constructor(private localservice2:CustomLocalServiceService ) {
    console.log("I am from consume service 2 component");
    console.log(localservice2.locations);
    console.log(localservice2.getLocalLocation());
    console.log("Removing one location");
    localservice2.locations.splice(3, 1)
    console.log(localservice2.locations)


   }

  ngOnInit() {
  }

}
