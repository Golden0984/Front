import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SymfonyService {
  public AboutUs: any = [];
  public Contact: any = [];

  constructor(private httpClient: HttpClient) { }

  getIntegrantes() {
    this.httpClient.get("http://localhost:8000/aboutUs")
      .subscribe((data: any) => {
        this.AboutUs = data;
        console.log(data)
      })
  }

  getContact() {
    this.httpClient.get("http://localhost:8000/contact")
      .subscribe((data: any) => {
        this.Contact = data;
      })
  }
}
