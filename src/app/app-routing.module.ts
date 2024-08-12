import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { EmployeesComponent } from './Dashboard/PERSONS-GROUP/dashboard-employees/employees.component';
import { DashboardHomeComponent } from './Dashboard/MATERIALS-GROUP/dashboard-home/dashboard-home.component';
import { TicketsComponent } from './Dashboard/TICKET-GROUP/tickets/tickets.component';
import { UpdateMaterialComponent } from './Dashboard/MATERIALS-GROUP/update-material/update-material.component';
import { MaterialsComponent } from './Dashboard/MATERIALS-GROUP/materials/materials.component';
import { TikcketsFialurComponent } from './Dashboard/TICKET-GROUP/tikckets-fialur/tikckets-fialur.component';
import { UpdateTicketByAdminComponent } from './Dashboard/TICKET-GROUP/update-ticket-by-admin/update-ticket-by-admin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      {path:'',component:DashboardHomeComponent, children:[
        {path: '', component: MaterialsComponent },
        {path: 'update/:id', component: UpdateMaterialComponent },
      ]},
      { path: 'employees', component: EmployeesComponent },

      { path: 'tickets', component: TicketsComponent, children:[
        {path: '', component: TikcketsFialurComponent },
        {path: 'update/:id', component: UpdateTicketByAdminComponent },
      ]}
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
