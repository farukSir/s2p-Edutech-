import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QtutorialComponent } from './qtutorial/qtutorial.component';
import { QhomeComponent } from './qhome/qhome.component';
import {RouterModule,Routes} from '@angular/router';
import {QtestComponent} from './qtest/qtest.component';
import {SharedModule} from '../../../shared/shared.module';
// import {StudentModule} from '../../student/student.module';
var routes:Routes = [
  {
    path: '',
    redirectTo: 'qhome',
    pathMatch: 'full'
  },
  {
    path: 'qhome',
    component: QhomeComponent
  },
  {
    path: 'qtutorial',
    component: QtutorialComponent
  },
  {
    path: 'qtest',
    component: QtestComponent
  },]
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)

  ],
  declarations: [ QtutorialComponent, QhomeComponent,QtestComponent]
})
export class QuantzModule { }
