import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthComponent } from './components/auth/auth.component';


export const routes: Routes = [
    {path:'dashboard', component:DashboardComponent},
    {path:'', component:AuthComponent},
    {path:'', redirectTo:'', pathMatch:'full'}
];
