import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewinfoComponent } from './viewinfo.component';

describe('ViewinfoComponent', () => {
  let component: ViewinfoComponent;
  let fixture: ComponentFixture<ViewinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
