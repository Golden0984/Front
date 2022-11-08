import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/services/json.service';
import { SymfonyService } from 'src/app/services/symfony.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor(public dataService: JsonService,public symfonyService: SymfonyService) { }

  ngOnInit(): void {
  }

}
