import { Component, EventEmitter, Input, Output } from '@angular/core';
import { loggingServices } from '../logging.services';
import { DataServices } from '../data.services';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers:[loggingServices]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private logservie:loggingServices,private dataser:DataServices){

  }
  onSetTo(status: string) {
    this.dataser.onStatusChanged({id:this.id,newStatus:status});
    this.logservie.logStatuschange(status);
  }
}
