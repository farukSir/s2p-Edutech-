import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QhomeComponent } from './qhome.component';

describe('QhomeComponent', () => {
  let component: QhomeComponent;
  let fixture: ComponentFixture<QhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
