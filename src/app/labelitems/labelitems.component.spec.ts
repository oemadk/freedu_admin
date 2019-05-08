import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelitemsComponent } from './labelitems.component';

describe('LabelitemsComponent', () => {
  let component: LabelitemsComponent;
  let fixture: ComponentFixture<LabelitemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelitemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
