import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { EmployeesComponent } from './Dashboard/dashboard-employees/employees.component';
import { DashboardHomeComponent } from './Dashboard/dashboard-home/dashboard-home.component';
import { TicketsComponent } from './Dashboard/tickets/tickets.component';
import { UpdateMaterialComponent } from './Dashboard/update-material/update-material.component';
import { MaterialsComponent } from './Dashboard/materials/materials.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      {path:'',component:DashboardHomeComponent, children:[
        {path: '', component: MaterialsComponent },
        {path: 'update/:id', component: UpdateMaterialComponent },
      ]},
      { path: 'update/:id', component: UpdateMaterialComponent},
      { path: 'employees', component: EmployeesComponent },
      { path: 'tickets', component: TicketsComponent }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
