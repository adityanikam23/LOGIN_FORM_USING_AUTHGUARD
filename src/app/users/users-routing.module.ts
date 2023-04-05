import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminsComponent } from './admins/admins.component';
import { LandingusersComponent } from './landingusers/landingusers.component';

const routes: Routes = [
  {path:"", component:LandingusersComponent, children:[
    {path:"admins", component:AdminsComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
