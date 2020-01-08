import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistancesSelectorComponent } from './distances-selector.component';

describe('DistancesSelectorComponent', () => {
  let component: DistancesSelectorComponent;
  let fixture: ComponentFixture<DistancesSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistancesSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistancesSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
