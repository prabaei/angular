import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute } from '@angular/router';
import { canDeactivateAuthGuard } from './server.candeactivate';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit,canDeactivateAuthGuard {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit:boolean=false;
  changesSaved:boolean=false;
  constructor(private serversService: ServersService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;

    this.allowEdit=this.route.snapshot.queryParams["allowEdit"]==='1'?true:false;
    this.route.queryParams.subscribe((params)=>{
      this.allowEdit=params["allowEdit"]==='1'?true:false;
    });

  }
canDeactivate(){
  if(!this.allowEdit){
return true;
  }
  if((this.serverName != this.server.name || this.serverStatus != this.server.status)&& !this.changesSaved){
    return confirm("Do you want to discard the changes");
  }
  else
  return true;
}
  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved=true;
  }

}
