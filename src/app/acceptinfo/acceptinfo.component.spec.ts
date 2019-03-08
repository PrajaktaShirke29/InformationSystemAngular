import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptinfoComponent } from './acceptinfo.component';

describe('AcceptinfoComponent', () => {
  let component: AcceptinfoComponent;
  let fixture: ComponentFixture<AcceptinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
