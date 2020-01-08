import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresetsSelectorComponent } from './presets-selector.component';

describe('PresetsSelectorComponent', () => {
  let component: PresetsSelectorComponent;
  let fixture: ComponentFixture<PresetsSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresetsSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresetsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
