import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingusers',
  templateUrl: './landingusers.component.html',
  styleUrls: ['./landingusers.component.css']
})
export class LandingusersComponent {

  constructor(private route : Router){

  }

  logout(){
    localStorage.clear();
    this.route.navigate(['/'])
  }

}
