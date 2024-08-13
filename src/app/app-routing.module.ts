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
import { DashboardPanneComponent } from './Dashboard/PANNES-GROUP/dashboard-panne/dashboard-panne.component';
import { PannesComponent } from './Dashboard/PANNES-GROUP/pannes/pannes.component';
import { AddPanneComponent } from './Dashboard/PANNES-GROUP/add-panne/add-panne.component';
import { DashboardUserComponent } from './User-dash/dashboard-user/dashboard-user.component';
import { UserTicketComponent } from './User-dash/user-ticket/user-ticket.component';
import { AddUserComponent } from './Dashboard/PERSONS-GROUP/add-user/add-user.component';
import { AddUserTicketComponent } from './User-dash/add-user-ticket/add-user-ticket.component';
import { AuthGuard } from './Service/auth-guard.guard';
import { DashboardTechnicianComponent } from './Technician-dash/dashboard-technician/dashboard-technician.component';
import { TikcketsProcessingTechnicianComponent } from './Technician-dash/tikckets-processing-technician/tikckets-processing-technician.component';
import { UpdateTicketsTechnicianComponent } from './Technician-dash/update-tickets-technician/update-tickets-technician.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], children: [
      {path:'',component:DashboardHomeComponent, children:[
        {path: '', component: MaterialsComponent },
        {path: 'update/:id', component: UpdateMaterialComponent },
      ]},
      { path: 'employees', component: EmployeesComponent },

      { path: 'tickets', component: TicketsComponent, canActivate: [AuthGuard], children:[
        {path: '', component: TikcketsFialurComponent },
        {path: 'update/:id', component: UpdateTicketByAdminComponent },
      ]},
      { path: 'panne', component: DashboardPanneComponent, canActivate: [AuthGuard] }
    ]
  },
  { path: 'userDash', component: DashboardUserComponent, children:[
        {path: '', component: UserTicketComponent },
        {path: 'addTicket', component: AddUserTicketComponent },
  ]},
  { path: 'technicianDash', component: DashboardTechnicianComponent, children:[
    {path: '', component: TikcketsProcessingTechnicianComponent },
    {path: 'update/:id', component: UpdateTicketsTechnicianComponent },
]}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
