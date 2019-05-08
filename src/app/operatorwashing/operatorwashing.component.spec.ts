import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorwashingComponent } from './operatorwashing.component';

describe('OperatorwashingComponent', () => {
  let component: OperatorwashingComponent;
  let fixture: ComponentFixture<OperatorwashingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorwashingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorwashingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
