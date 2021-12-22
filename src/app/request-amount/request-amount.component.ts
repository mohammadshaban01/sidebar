import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-amount',
  templateUrl: './request-amount.component.html',
  styleUrls: ['./request-amount.component.scss']
})
export class RequestAmountComponent implements OnInit {

  isShow = false;

  toggleStatus() {
    this.isShow = !this.isShow;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
