import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistanceGraphComponent } from './line-bar-chart.component';

describe('DistanceGraphComponent', () => {
  let component: DistanceGraphComponent;
  let fixture: ComponentFixture<DistanceGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DistanceGraphComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistanceGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
