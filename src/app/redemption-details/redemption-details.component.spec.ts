import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedemptionDetailsComponent } from './redemption-details.component';

describe('RedemptionDetailsComponent', () => {
  let component: RedemptionDetailsComponent;
  let fixture: ComponentFixture<RedemptionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedemptionDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedemptionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
