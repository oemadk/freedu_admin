import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmellsComponent } from './smells.component';

describe('SmellsComponent', () => {
  let component: SmellsComponent;
  let fixture: ComponentFixture<SmellsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmellsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
