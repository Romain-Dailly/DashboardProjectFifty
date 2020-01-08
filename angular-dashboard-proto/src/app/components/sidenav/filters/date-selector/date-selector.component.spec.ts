import { MonthSelectorComponent } from './month-selector/month-selector.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { YearSelectorComponent } from './year-selector/year-selector.component';
import { DateSelectorComponent } from './date-selector.component';

describe('DateSelectorComponent', () => {
  let component: DateSelectorComponent;
  let fixture: ComponentFixture<DateSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
