import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoDatePickerComponent } from './kendo-date-picker.component';

describe('KendoDatePickerComponent', () => {
  let component: KendoDatePickerComponent;
  let fixture: ComponentFixture<KendoDatePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoDatePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
