import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formdata: any;

  constructor(private route: Router) {

  }

  ngOnInit(): void {

    if (localStorage.getItem("usertype") == "admin") {
      this.route.navigate(['/users/admins']);
    }
    else if (localStorage.getItem("usertype") == "owner") {
      this.route.navigate(['/about/owner']);
    }
    else {
      this.route.navigate(['/']);
    }

    this.formdata = new FormGroup({
      username: new FormControl("", Validators.compose([Validators.required])),
      password: new FormControl("", Validators.compose([Validators.required]))
    })



  }






  submit(data: any) {
    if (data.username == "aditya" && data.password == "12345678") {
      localStorage.setItem("username", data.username);
      localStorage.setItem("usertype", "admin");
      this.route.navigate(['/users/admins']);
    }
    else if (data.username == "owner" && data.password == "87654321") {
      localStorage.setItem("username", data.username);
      localStorage.setItem("usertype", "owner");
      this.route.navigate(['/about/owner']);
    }
    else {
      alert("Invalid Username & Password");
    }
  }



}
