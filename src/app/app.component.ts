import { Component } from '@angular/core';

@Component({
  selector: 'cts-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class RootComponent {
  title = 'app';
  name  = 'prafful'
  sayHello = function(){
    console.log("Hello from app component!!! :)")
  }
}
