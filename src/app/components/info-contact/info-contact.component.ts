import { Component, OnInit } from '@angular/core';
import { SymfonyService } from 'src/app/services/symfony.service';

@Component({
  selector: 'app-info-contact',
  templateUrl: './info-contact.component.html',
  styleUrls: ['./info-contact.component.css']
})
export class InfoContactComponent implements OnInit {

  constructor(public symfonyServer: SymfonyService) { }

  ngOnInit(): void {
  }

}
