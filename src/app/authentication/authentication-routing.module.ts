import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  { path: '', component: SigninComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reset', component: ResetPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
