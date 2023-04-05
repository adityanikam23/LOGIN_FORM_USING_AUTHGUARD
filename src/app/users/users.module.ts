import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { LandingusersComponent } from './landingusers/landingusers.component';
import { AdminsComponent } from './admins/admins.component';


@NgModule({
  declarations: [
    LandingusersComponent,
    AdminsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
