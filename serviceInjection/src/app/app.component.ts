import { Component,OnInit } from '@angular/core';
import { DataServices } from './data.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DataServices]
})
export class AppComponent implements OnInit {
accounts:{name:string,status:string}[]=[];
  constructor(private dataser:DataServices){

  }
ngOnInit(){
this.accounts=this.dataser.accounts;
}
  // onAccountAdded(newAccount: {name: string, status: string}) {
  //   this.dataser.createNewAccount(newAccount.name,newAccount.status);
  // }

  // onStatusChanged(updateInfo: {id: number, newStatus: string}) {
  //   this.accounts[updateInfo.id].status = updateInfo.newStatus;
  // }
}
