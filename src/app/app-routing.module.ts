import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudComponent } from './components/crud/crud.component';
import { ListComponent } from './components/list/list.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [{
  path: 'login', component: LoginComponent
}, {
  path: 'crud', component: CrudComponent
}, {
  path: 'list', component: ListComponent
}, {
  path: 'dashboard', component: DashboardComponent
}, {
  path: '', component: HomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
