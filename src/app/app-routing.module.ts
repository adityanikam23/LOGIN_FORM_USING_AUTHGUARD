import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthoneGuard } from './authguards/authone.guard';
import { AuththreeGuard } from './authguards/auththree.guard';
import { AuthtwoGuard } from './authguards/authtwo.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"", component:LoginComponent, pathMatch:'full'},
  {path:"users", canActivate:[AuthoneGuard], loadChildren:()=>import('./users/users.module').then(
    m=>m.UsersModule
  )},
  {path:"about", canActivate:[AuthtwoGuard], loadChildren:()=>import('./about/about.module').then(
    n=>n.AboutModule
  )}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
