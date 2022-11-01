import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/services/json.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  break: any;
  constructor(public dataService: JsonService) { }

  ngOnInit(): void {
    this.break = {
      400: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      550: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      850: {
        slidesPerView: 4,
        spaceBetween: 10
      }
    }
  }


  toggleDescription(item: any): void {
    item.showDescription = !item.showDescription
  }

}
