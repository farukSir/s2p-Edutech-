import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TopicsComponent } from './topics/topics.component';
import { TestComponent } from './test/test.component';
import { ResultComponent } from './result/result.component';
import { ReportsComponent } from './reports/reports.component';
import {RouterModule,Routes} from '@angular/router';
import { QuantzComponent } from './quantz/quantz.component';
import {SharedModule} from '../../shared/shared.module';
import { RestService} from '../../services/rest.service';

var routes:Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'reports',
    component: ReportsComponent
  },
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'test/result',
    component: ResultComponent
  },
  {
    path: 'topics',
    component: TopicsComponent
  },
  {
    path: 'quantz',
    component: QuantzComponent,
    children: [
      {
        path: '',
        loadChildren: './quantz/quantz.module#QuantzModule'
      }
    ]
  }
  // ,{
  //   path: 'quanthome', 
  //   // component: QuantzComponent,
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: './quantz/quantz.module#QuantzModule'
  //     }
  //   ]
  // }
];
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeComponent, TopicsComponent, TestComponent, ResultComponent, ReportsComponent, QuantzComponent],
  providers: [RestService]
})
export class StudentModule { }
