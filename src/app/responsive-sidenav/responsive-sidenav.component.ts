import { Component, OnInit, ViewChild } from '@angular/core';

import {MatSidenav} from '@angular/material/sidenav';
import {BreakpointObserver} from '@angular/cdk/layout';

@Component({
  selector: 'app-responsive-sidenav',
  templateUrl: './responsive-sidenav.component.html',
  styleUrls: ['./responsive-sidenav.component.scss']
})
export class ResponsiveSidenavComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  
  res: any ;
  constructor(private observer: BreakpointObserver) {
    
   }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
    
  }



  ngOnInit(): void {
  }

}
