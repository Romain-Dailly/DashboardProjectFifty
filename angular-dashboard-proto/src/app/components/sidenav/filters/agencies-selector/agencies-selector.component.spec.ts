import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenciesSelectorComponent } from './agencies-selector.component';

describe('AgenciesSelectorComponent', () => {
  let component: AgenciesSelectorComponent;
  let fixture: ComponentFixture<AgenciesSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgenciesSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenciesSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
