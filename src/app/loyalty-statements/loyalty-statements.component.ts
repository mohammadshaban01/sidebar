import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loyalty-statements',
  templateUrl: './loyalty-statements.component.html',
  styleUrls: ['./loyalty-statements.component.scss']
})
export class LoyaltyStatementsComponent implements OnInit {

  month=['jan', 'feb'];

  list=['list1', 'list2', 'list3'];

  constructor() { }

  ngOnInit(): void {
  }

}
