import { Component } from '@angular/core';
import { JsonService } from './services/json.service';
import { SymfonyService } from './services/symfony.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Version-0';

  constructor(public dataService: JsonService,private symfonyService: SymfonyService){}

  ngOnInit():void{
    this.dataService.datosJson();
    this.symfonyService.getIntegrantes();
    this.symfonyService.getContact();
  }

}
