import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrucksSelectorComponent } from './trucks-selector.component';

describe('TrucksSelectorComponent', () => {
  let component: TrucksSelectorComponent;
  let fixture: ComponentFixture<TrucksSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrucksSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrucksSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
