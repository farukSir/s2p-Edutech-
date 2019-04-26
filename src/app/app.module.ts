import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import {RouterModule, Routes} from '@angular/router';
import { StudentComponent } from './layout/student/student.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

var routes:Routes = [
  {
    path: '',
    component: PagesComponent,
    children:[
      {
        path: '',
        loadChildren: './pages/pages.module#PagesModule'
      }
    ]
  },
  {
    path: 'student',
    component: StudentComponent,
    children: [
      {
        path: '',
        loadChildren: './layout/student/student.module#StudentModule'
      }
    ]
  }
];
var config = {
  apiKey: "AIzaSyAjBW6aR7qD2_iX4eBCItK9ESOICVix9A8",
  authDomain: "s2pbridgeadmin.firebaseapp.com",
  databaseURL: "https://s2pbridgeadmin.firebaseio.com",
  projectId: "s2pbridgeadmin",
  storageBucket: "s2pbridgeadmin.appspot.com",
  messagingSenderId: "1084170117173"
};
@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    StudentComponent
    ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
