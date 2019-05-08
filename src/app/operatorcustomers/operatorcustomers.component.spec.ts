import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorcustomersComponent } from './operatorcustomers.component';

describe('OperatorcustomersComponent', () => {
  let component: OperatorcustomersComponent;
  let fixture: ComponentFixture<OperatorcustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorcustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorcustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
