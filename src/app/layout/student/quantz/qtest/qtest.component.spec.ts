import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QtestComponent } from './qtest.component';

describe('QtestComponent', () => {
  let component: QtestComponent;
  let fixture: ComponentFixture<QtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
