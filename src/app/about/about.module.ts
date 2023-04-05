import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { LandingaboutComponent } from './landingabout/landingabout.component';
import { OwnerComponent } from './owner/owner.component';
import { OwneroneComponent } from './ownerone/ownerone.component';
import { OwnertwoComponent } from './ownertwo/ownertwo.component';
import { OwnerthreeComponent } from './ownerthree/ownerthree.component';


@NgModule({
  declarations: [
    LandingaboutComponent,
    OwnerComponent,
    OwneroneComponent,
    OwnertwoComponent,
    OwnerthreeComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
