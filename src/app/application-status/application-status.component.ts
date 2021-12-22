import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-status',
  templateUrl: './application-status.component.html',
  styleUrls: ['./application-status.component.scss']
})
export class ApplicationStatusComponent implements OnInit {

  status=['Approved', 'Pending', 'Rejected'];

  list=['list1', 'list2', 'list3'];

  constructor() { }

  ngOnInit(): void {
  }

}
