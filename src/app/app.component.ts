import { Component } from '@angular/core';

//IMPORTO EL ARCHIVO JSON
import info from 'src/assets/json/info.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Version-0';
  Informacion = info;
  ngOnInit():void{

  }
  
}
