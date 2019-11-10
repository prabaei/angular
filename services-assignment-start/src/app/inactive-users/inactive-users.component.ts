import { Component, EventEmitter, Input, Output } from '@angular/core';
import { userServices } from '../users.services';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];
  // @Output() userSetToActive = new EventEmitter<number>();
  constructor(private userser:userServices){

  }
  onSetToActive(id: number) {
    // this.userSetToActive.emit(id);
    this.userser.onSetToActive(id);
  }
}
