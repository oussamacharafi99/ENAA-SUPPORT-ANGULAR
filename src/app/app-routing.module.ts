import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { EmployeesComponent } from './Dashboard/dashboard-employees/employees.component';
import { DashboardHomeComponent } from './Dashboard/dashboard-home/dashboard-home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: '', component: DashboardHomeComponent },
      { path: 'employees', component: EmployeesComponent }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
