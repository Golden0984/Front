import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  json: any;

  constructor(private httpClient: HttpClient) { }

  // Servicio para regocer la informacion de datos json y reescribir el carrousel para añadir el campo show description
  datosJson() {
    this.httpClient.get("assets/json/Info.json")
      .subscribe((data: any) => {
        this.json = data;
        this.json.carrousel = this.json.carrousel.map((item: any) => {
          return {
            ...item,
            showDescription: false
          }
        })
        console.log(this.json)
      })
  }
}
