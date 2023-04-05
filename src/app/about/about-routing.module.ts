import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingaboutComponent } from './landingabout/landingabout.component';
import { OwnerComponent } from './owner/owner.component';
import { OwneroneComponent } from './ownerone/ownerone.component';
import { OwnerthreeComponent } from './ownerthree/ownerthree.component';
import { OwnertwoComponent } from './ownertwo/ownertwo.component';

const routes: Routes = [
  {path:"", component:LandingaboutComponent, children:[
    {path:"owner", component:OwnerComponent},
    {path:"ownerone", component:OwneroneComponent},
    {path:"ownertwo", component:OwnertwoComponent},
    {path:"ownerthree", component:OwnerthreeComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
