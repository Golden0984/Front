import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TitleStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  json: any;

  constructor(private httpClient: HttpClient) { }

  datosJson(){
    this.httpClient.get("assets/json/Info.json")
    .subscribe((data: any) => {
      this.json = data;
      console.log("json");
      console.log(data);
    })
  }
}
