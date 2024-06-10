import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WebSocketService } from "./core/services/websocket.service";
import { LoginComponent } from './features-modules/login/login.component';
import { NotificationComponent } from './features-modules/notification/notification.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './core/services/auth/auth.interceptor';
import { SimulatorComponent } from './features-modules/simulator/simulator.component';
import { StatisticsComponent } from './features-modules/statistics/statistics.component';
import { HomeComponent } from './features-modules/home/home.component';
import { TransactionComponent } from './features-modules/transaction/transaction.component';
import { ChartModule } from 'angular2-chartjs';
import { RegisterComponent } from './features-modules/register/register.component';
import { ClaimComponent } from './features-modules/claim/claim.component';
import { PersonalComponentComponent } from './features-modules/personal-component/personal-component.component';
import { AgencyListComponent } from './features-modules/agency-list/agency-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotificationComponent,
    SimulatorComponent,
    StatisticsComponent,
    HomeComponent,
    TransactionComponent,
    RegisterComponent,
    ClaimComponent,
    PersonalComponentComponent,
    AgencyListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ChartModule
  ],
  providers: [WebSocketService, authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
