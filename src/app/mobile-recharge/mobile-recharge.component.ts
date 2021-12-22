import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-recharge',
  templateUrl: './mobile-recharge.component.html',
  styleUrls: ['./mobile-recharge.component.scss']
})
export class MobileRechargeComponent implements OnInit {
  status=['Approved', 'Pending', 'Rejected'];

  list=['list1', 'list2', 'list3'];

  constructor() { }

  ngOnInit(): void {
  }

}
