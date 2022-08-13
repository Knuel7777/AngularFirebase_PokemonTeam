import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeamComponent } from './views/team/team.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'team', component: TeamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot( routes )],
  exports: [RouterModule]
})

export class AppRoutingModule { }
