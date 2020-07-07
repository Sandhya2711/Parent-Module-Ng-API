import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponentComponent } from './component/login-component/login-component.component';
import { RegisterComponentComponent } from './component/register-component/register-component.component';
import { LoginSuccessComponent } from './component/login-success/login-success.component';


const routes: Routes = [
  {path:"", redirectTo:"/login",pathMatch:"full" },
  {path:"login" ,component:LoginComponentComponent},
  {path:"register",component:RegisterComponentComponent},
  {path:"loginSuccess",component:LoginSuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
