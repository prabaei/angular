import { Component, OnInit, OnDestroy } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';
import {  Subscription } from 'rxjs';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit ,OnDestroy{
  server: {id: number, name: string, status: string};
 paramObser:Subscription;
  constructor(private serversService: ServersService,private route:ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    console.log(this.serversService.getServer(1));
//     this.server = this.serversService.getServer(this.route.snapshot.params['id']);
//     this.paramObser=this.route.params.subscribe(
//       (param:Params)=>{
// this.server=this.serversService.getServer(param['id'])
//       }
//     );
  }
ngOnDestroy(){
  this.paramObser.unsubscribe();
}
}
