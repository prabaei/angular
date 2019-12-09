import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Authenticate } from '../app.services.authenticate';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private authservice:Authenticate) { }

  ngOnInit() {
  }
  onLoadServer(){
this.router.navigate(['/servers']);
  }
  Onlogin(){
this.authservice.login();
  }
  OnLogout(){
    this.authservice.logout();
  }
}
