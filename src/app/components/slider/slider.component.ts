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
      470: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      700: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1100: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1500:{
        slidesPerView: 5,
        spaceBetween: 10
      },
      1900:{
        slidesPerView: 6,
        spaceBetween: 10
      }
    }
  }


  toggleDescription(item: any): void {
    item.showDescription = !item.showDescription
  }

}
