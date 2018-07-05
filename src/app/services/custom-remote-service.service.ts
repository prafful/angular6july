import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CustomRemoteServiceService {

  constructor(private httpClient:HttpClient) { }

  getRemoteData(){
    return this.httpClient.get("https://jsonplaceholder.typicode.com/posts")
  }


}
