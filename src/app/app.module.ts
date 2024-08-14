import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home/home.component';
import { LoginComponent } from './Home/login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InterceptorAuth } from './Service/auth_Interceptor.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { MenuComponent } from './Dashboard/menu/menu.component';
import { LogoutComponent } from './Logout/logout.component';
import { TicketsComponent } from './Dashboard/TICKET-GROUP/tickets/tickets.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialeModule } from './Angular-materiale/materiale.module';
import { MaterialsComponent } from './Dashboard/MATERIALS-GROUP/materials/materials.component';
import { AddMaterialComponent } from './Dashboard/MATERIALS-GROUP/add-material/add-material.component';
import { EmployeesComponent } from './Dashboard/PERSONS-GROUP/dashboard-employees/employees.component';
import { DashboardHomeComponent } from './Dashboard/MATERIALS-GROUP/dashboard-home/dashboard-home.component';
import { AddUserComponent } from './Dashboard/PERSONS-GROUP/add-user/add-user.component';
import { AddTechnicianComponent } from './Dashboard/PERSONS-GROUP/add-technician/add-technician.component';
import { TikcketsFialurComponent } from './Dashboard/TICKET-GROUP/tikckets-fialur/tikckets-fialur.component';
import { TikcketsFixedComponent } from './Dashboard/TICKET-GROUP/tikckets-fixed/tikckets-fixed.component';
import { UpdateMaterialComponent } from './Dashboard/MATERIALS-GROUP/update-material/update-material.component';
import { UpdateTicketByAdminComponent } from './Dashboard/TICKET-GROUP/update-ticket-by-admin/update-ticket-by-admin.component';
import { TikcketsProcessingComponent } from './Dashboard/TICKET-GROUP/tikckets-processing/tikckets-processing.component';
import { DashboardPanneComponent } from './Dashboard/PANNES-GROUP/dashboard-panne/dashboard-panne.component';
import { AddPanneComponent } from './Dashboard/PANNES-GROUP/add-panne/add-panne.component';
import { PannesComponent } from './Dashboard/PANNES-GROUP/pannes/pannes.component';
import { DashboardUserComponent } from './User-dash/dashboard-user/dashboard-user.component';
import { AddUserTicketComponent } from './User-dash/add-user-ticket/add-user-ticket.component';
import { UserTicketComponent } from './User-dash/user-ticket/user-ticket.component';
import { MenuUserComponent } from './User-dash/menu-user/menu-user.component';
import { DashboardTechnicianComponent } from './Technician-dash/dashboard-technician/dashboard-technician.component';
import { TikcketsProcessingTechnicianComponent } from './Technician-dash/tikckets-processing-technician/tikckets-processing-technician.component';
import { TikcketsFixedTechnicianComponent } from './Technician-dash/tikckets-fixed-technician/tikckets-fixed-technician.component';
import { UpdateTicketsTechnicianComponent } from './Technician-dash/update-tickets-technician/update-tickets-technician.component';
import { MenuTechnicianComponent } from './Technician-dash/menu-technician/menu-technician.component';
import { RapportTableComponent } from './Dashboard/STATISTIC/rapport-table/rapport-table.component';
import { StatisticComponent } from './Dashboard/STATISTIC/statistic/statistic.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    MenuComponent,
    LogoutComponent,
    TicketsComponent,
    MaterialsComponent,
    AddMaterialComponent,
    EmployeesComponent,
    DashboardHomeComponent,
    AddUserComponent,
    AddTechnicianComponent,
    TikcketsFialurComponent,
    TikcketsFixedComponent,
    UpdateMaterialComponent,
    UpdateTicketByAdminComponent,
    TikcketsProcessingComponent,
    DashboardPanneComponent,
    AddPanneComponent,
    PannesComponent,
    DashboardUserComponent,
    AddUserTicketComponent,
    UserTicketComponent,
    MenuUserComponent,
    DashboardTechnicianComponent,
    TikcketsProcessingTechnicianComponent,
    TikcketsFixedTechnicianComponent,
    UpdateTicketsTechnicianComponent,
    MenuTechnicianComponent,
    RapportTableComponent,
    StatisticComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialeModule,
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorAuth,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
