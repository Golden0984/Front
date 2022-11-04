import { Component } from '@angular/core';
import { JsonService } from './services/json.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Version-0';

  constructor(public dataService: JsonService){}

  ngOnInit():void{
    this.dataService.datosJson();
  }

}
