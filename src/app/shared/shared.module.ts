import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicgridComponent } from './topicgrid/topicgrid.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TopicgridComponent],
  exports: [TopicgridComponent]
})
export class SharedModule { }
