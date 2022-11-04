import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SymfonyService {
  public Usuarios: any = [];

  constructor(private httpClient: HttpClient) { }

  getUsuarios() {
    this.httpClient.get("http://localhost:8000/user")
      .subscribe((data: any) => {
        this.Usuarios = data;
        console.log(data);
      })
  }
}
