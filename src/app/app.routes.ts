import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthComponent } from './components/auth/auth.component';
import { MaterialsComponent } from './components/materials/materials.component';


export const routes: Routes = [
    {path:'dashboard', component:DashboardComponent},
    {path:'materials', component:MaterialsComponent},
    {path:'', component:AuthComponent},
    {path:'', redirectTo:'', pathMatch:'full'}
];
