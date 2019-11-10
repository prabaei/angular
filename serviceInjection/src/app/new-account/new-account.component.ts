import { Component, EventEmitter, Output } from '@angular/core';
import { loggingServices } from '../logging.services';
import { DataServices } from '../data.services';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers:[loggingServices]
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private logservie:loggingServices,private dataser:DataServices){

  }
  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    this.dataser.createNewAccount(accountName,accountStatus);
    this.logservie.logStatuschange(accountStatus);
  }
}
