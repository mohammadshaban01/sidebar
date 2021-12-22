import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-application',
  templateUrl: './loan-application.component.html',
  styleUrls: ['./loan-application.component.scss']
})
export class LoanApplicationComponent implements OnInit {

  month=['jan', 'feb', 'mar'];

  list=['list1', 'list2', 'list3'];

  constructor() { }

  ngOnInit(): void {
  }

}
