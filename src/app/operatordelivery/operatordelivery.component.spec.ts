import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatordeliveryComponent } from './operatordelivery.component';

describe('OperatordeliveryComponent', () => {
  let component: OperatordeliveryComponent;
  let fixture: ComponentFixture<OperatordeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatordeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatordeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
