import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccrodionComponent } from './accrodion.component';

describe('AccrodionComponent', () => {
  let component: AccrodionComponent;
  let fixture: ComponentFixture<AccrodionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccrodionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccrodionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
