import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomLocalServiceService {

  locations = ['chennai','kolkata','gurugram','mumbai','bengaluru']

  getLocalLocation(){
    return "I will send you location details..."
  }

  constructor() { }
}
