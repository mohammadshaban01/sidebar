import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopHaddingComponent } from './desktop-hadding.component';

describe('DesktopHaddingComponent', () => {
  let component: DesktopHaddingComponent;
  let fixture: ComponentFixture<DesktopHaddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesktopHaddingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopHaddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
