import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingabout',
  templateUrl: './landingabout.component.html',
  styleUrls: ['./landingabout.component.css']
})
export class LandingaboutComponent {

  constructor(private route : Router){

  }

  logout(){
    localStorage.clear()
    this.route.navigate(['/']);
  }
}
