import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InprogressordersComponent } from './inprogressorders.component';

describe('InprogressordersComponent', () => {
  let component: InprogressordersComponent;
  let fixture: ComponentFixture<InprogressordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InprogressordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InprogressordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
