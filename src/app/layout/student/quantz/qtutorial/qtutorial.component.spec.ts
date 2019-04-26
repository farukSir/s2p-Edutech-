import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QtutorialComponent } from './qtutorial.component';

describe('QtutorialComponent', () => {
  let component: QtutorialComponent;
  let fixture: ComponentFixture<QtutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QtutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QtutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
