import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.scss']
})
export class CustomerProfileComponent implements OnInit {

  imgsrc = 'assets/images/icons/add-img.png';

  constructor(
    public _d: DomSanitizer
  ) { }

  fileChange(e: any) {
    const file = e.srcElement.files[0]; 
    this.imgsrc = window.URL.createObjectURL(file); 

  }

  ngOnInit(): void {
  }

}
