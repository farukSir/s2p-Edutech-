import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';
import { HomeComponent } from './home/home.component';
import {RouterModule,Routes} from '@angular/router';

var routes:Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
   {
      path: 'login',
      component: LoginComponent
   },
   {
      path: 'signup',
      component: SignupComponent
   },
   {
      path: 'forgotpwd',
      component: ForgotpwdComponent
   }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent, SignupComponent, ForgotpwdComponent, HomeComponent]
})
export class PagesModule { }
