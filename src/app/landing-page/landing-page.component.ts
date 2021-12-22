import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  imageObject = [{
    image: 'assets/images/slider-img/slide-1.jpg',
    thumbImage: 'assets/images/slider-img/slide-1.jpg',
    // title: 'Loan Application Banner-1'
}, {
    image: 'assets/images/slider-img/slide-2.jpg',
    thumbImage: 'assets/images/slider-img/slide-2.jpg',
    // title: 'Loan Application Banner-2'
}, {
    image: 'assets/images/slider-img/slide-3.jpg',
    thumbImage: 'assets/images/slider-img/slide-3.jpg',
    // title: 'Loan Application Banner-3'
},
{
    image: 'assets/images/slider-img/slide-4.jpg',
    thumbImage: 'assets/images/slider-img/slide-4.jpg',
    // title: 'Loan Application Banner-4'
}, 
{
  image: 'assets/images/slider-img/slide-5.jpg',
  thumbImage: 'assets/images/slider-img/slide-5.jpg',
  // title: 'Loan Application Banner-4'
}, 
{
  image: 'assets/images/slider-img/slide-6.jpg',
  thumbImage: 'assets/images/slider-img/slide-6.jpg',
  // title: 'Loan Application Banner-4'
}, 
];

  constructor() { }

  ngOnInit(): void {
  }

}
