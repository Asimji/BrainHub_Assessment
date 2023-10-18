import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {
    path: "",
    canActivate: [AuthGuard], 
    component: DashboardComponent
  },
  {path:"cart",component:CartComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
