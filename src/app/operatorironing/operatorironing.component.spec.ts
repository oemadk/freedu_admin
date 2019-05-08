import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorironingComponent } from './operatorironing.component';

describe('OperatorironingComponent', () => {
  let component: OperatorironingComponent;
  let fixture: ComponentFixture<OperatorironingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorironingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorironingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
