import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorlabelingComponent } from './operatorlabeling.component';

describe('OperatorlabelingComponent', () => {
  let component: OperatorlabelingComponent;
  let fixture: ComponentFixture<OperatorlabelingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorlabelingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorlabelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
