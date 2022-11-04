import { Component, OnInit } from '@angular/core';
import { SymfonyService } from 'src/app/services/symfony.service';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(public symfonyService: SymfonyService) { }

  ngOnInit(): void {
    this.symfonyService.getUsuarios();
  }

}
