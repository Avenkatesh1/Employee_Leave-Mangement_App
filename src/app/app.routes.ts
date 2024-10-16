import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { NewLeaveComponent } from './pages/new-leave/new-leave.component';

export const routes: Routes = [
    {
        path:"",
        redirectTo:"Login",
        pathMatch:"full"
    },
    {
        path:"Login",
        component: LoginComponent,
    },
    {
        path:"",
        component: LayoutComponent,
        children:[
            {
                path:"Dashboard",
                component: DashboardComponent,
            },
            {
                path:"Employee",
                component: EmployeeComponent,
            },
            {
                path:"New-leave",
                component: NewLeaveComponent,
            },
        ]
    }
];
