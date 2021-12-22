import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redemption-details',
  templateUrl: './redemption-details.component.html',
  styleUrls: ['./redemption-details.component.scss']
})
export class RedemptionDetailsComponent implements OnInit {

  month=['jan', 'feb'];

  list=['list1', 'list2', 'list3'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
