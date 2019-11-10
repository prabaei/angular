import { Component } from '@angular/core';
import { userServices } from './users.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[userServices]
})
export class AppComponent {
  activeUsers = [];
  inactiveUsers = [];

  constructor(private userSer:userServices){
    this.activeUsers=this.userSer.activeUsers;
    this.inactiveUsers=this.userSer.inactiveUsers;
  }
  // onSetToInactive(id: number) {
  //   this.inactiveUsers.push(this.activeUsers[id]);
  //   this.activeUsers.splice(id, 1);
  // }

  // onSetToActive(id: number) {
  //   this.activeUsers.push(this.inactiveUsers[id]);
  //   this.inactiveUsers.splice(id, 1);
  // }
}
