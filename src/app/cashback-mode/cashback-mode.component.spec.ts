import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashbackModeComponent } from './cashback-mode.component';

describe('CashbackModeComponent', () => {
  let component: CashbackModeComponent;
  let fixture: ComponentFixture<CashbackModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashbackModeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashbackModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
