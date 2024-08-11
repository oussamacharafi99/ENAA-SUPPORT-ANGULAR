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
import { LogoutComponent } from './logout/logout.component';
import { TicketsComponent } from './Dashboard/tickets/tickets.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialeModule } from './materiale/materiale.module';
import { MaterialsComponent } from './Dashboard/materials/materials.component';
import { AddMaterialComponent } from './Dashboard/add-material/add-material.component';
import { EmployeesComponent } from './Dashboard/dashboard-employees/employees.component';
import { DashboardHomeComponent } from './Dashboard/dashboard-home/dashboard-home.component';
import { AddUserComponent } from './Dashboard/add-user/add-user.component';
import { AddTechnicianComponent } from './Dashboard/add-technician/add-technician.component';

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
    AddTechnicianComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialeModule
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
