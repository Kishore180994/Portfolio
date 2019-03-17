import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoilioComponent } from './portfoilio.component';

describe('PortfoilioComponent', () => {
  let component: PortfoilioComponent;
  let fixture: ComponentFixture<PortfoilioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfoilioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfoilioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
