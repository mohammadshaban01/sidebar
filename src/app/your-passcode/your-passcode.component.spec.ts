import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourPasscodeComponent } from './your-passcode.component';

describe('YourPasscodeComponent', () => {
  let component: YourPasscodeComponent;
  let fixture: ComponentFixture<YourPasscodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourPasscodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourPasscodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
