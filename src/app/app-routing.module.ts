import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotificationComponent } from './features-modules/notification/notification.component';
import { LoginComponent } from './features-modules/login/login.component';
import { AuthGuardService } from './core/services/auth/auth-guard.service';
import { LoginGuardService } from './core/services/auth/login-guard.service';
import { SimulatorComponent } from './features-modules/simulator/simulator.component';
import { HomeComponent } from './features-modules/home/home.component';
import { StatisticsComponent } from './features-modules/statistics/statistics.component';
import { TransactionComponent } from './features-modules/transaction/transaction.component';
import { RegisterComponent } from './features-modules/register/register.component';
import { ClaimComponent } from './features-modules/claim/claim.component';
import { PersonalComponentComponent } from './features-modules/personal-component/personal-component.component';
import { AgencyListComponent } from './features-modules/agency-list/agency-list.component';

const routes: Routes = [
  { path: 'notification', component: NotificationComponent,    /* canActivate: [AuthGuardService] */  },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuardService]   },
  { path: 'simulator', component: SimulatorComponent,     /* canActivate: [AuthGuardService] */  },
  { path: 'home', component: HomeComponent,    /* canActivate: [AuthGuardService] */  },
  { path: 'statistics', component: StatisticsComponent,    /* canActivate: [AuthGuardService] */  },
  { path: 'transaction', component: TransactionComponent,    /* canActivate: [AuthGuardService] */  },
  { path: 'claim', component: ClaimComponent,    /* canActivate: [AuthGuardService] */  },

  { path: 'register', component: RegisterComponent},
  { path: 'personal', component: PersonalComponentComponent},
  { path: 'agency', component: AgencyListComponent},



  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
