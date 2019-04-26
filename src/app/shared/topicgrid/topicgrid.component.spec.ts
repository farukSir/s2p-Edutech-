import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicgridComponent } from './topicgrid.component';

describe('TopicgridComponent', () => {
  let component: TopicgridComponent;
  let fixture: ComponentFixture<TopicgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
