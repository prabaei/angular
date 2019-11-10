import { Component, EventEmitter, Input, Output } from '@angular/core';
import { userServices } from '../users.services';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: string[];
  // @Output() userSetToInactive = new EventEmitter<number>();
constructor(private userser:userServices){

}
  onSetToInactive(id: number) {
    this.userser.onSetToInactive(id);
  }
}
