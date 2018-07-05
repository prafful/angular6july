import { Component, OnInit } from '@angular/core';
import { CustomLocalServiceService } from '../../services/custom-local-service.service'


@Component({
  selector: 'cts-consumeservice1',
  templateUrl: './consumeservice1.component.html',
  styleUrls: ['./consumeservice1.component.css']
})
export class Consumeservice1Component implements OnInit {

  constructor(private localservice1:CustomLocalServiceService ) {
    console.log("I am from consume service 1 component");
    console.log(localservice1.locations);
    console.log(localservice1.getLocalLocation());
    localservice1.locations.push('cochin')
    console.log("Pushing new location...");
    console.log(localservice1.locations)

   }

  ngOnInit() {
  }

}
