import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyaltyStatementsComponent } from './loyalty-statements.component';

describe('LoyaltyStatementsComponent', () => {
  let component: LoyaltyStatementsComponent;
  let fixture: ComponentFixture<LoyaltyStatementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoyaltyStatementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoyaltyStatementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
