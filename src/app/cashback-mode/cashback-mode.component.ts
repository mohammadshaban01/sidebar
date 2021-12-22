import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cashback-mode',
  templateUrl: './cashback-mode.component.html',
  styleUrls: ['./cashback-mode.component.scss']
})
export class CashbackModeComponent implements OnInit {

  containers = [length];

  constructor() { }

  add() {
    this.containers.push(this.containers.length);
  }

  ngOnInit(): void {
  }

}
