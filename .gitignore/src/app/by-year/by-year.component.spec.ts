import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByYearComponent } from './by-year.component';

describe('ByYearComponent', () => {
  let component: ByYearComponent;
  let fixture: ComponentFixture<ByYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
