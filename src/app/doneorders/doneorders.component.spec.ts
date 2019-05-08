import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneordersComponent } from './doneorders.component';

describe('DoneordersComponent', () => {
  let component: DoneordersComponent;
  let fixture: ComponentFixture<DoneordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoneordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
