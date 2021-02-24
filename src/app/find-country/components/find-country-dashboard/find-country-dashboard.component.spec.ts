import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCountryDashboardComponent } from './find-country-dashboard.component';

describe('FindCountryDashboardComponent', () => {
  let component: FindCountryDashboardComponent;
  let fixture: ComponentFixture<FindCountryDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindCountryDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindCountryDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
