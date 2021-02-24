import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableContinentComponent } from './table-continent.component';

describe('TableContinentComponent', () => {
  let component: TableContinentComponent;
  let fixture: ComponentFixture<TableContinentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableContinentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableContinentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
