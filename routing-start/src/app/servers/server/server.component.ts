import { Component, OnInit, OnDestroy } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit,OnDestroy {
  server: {id: number, name: string, status: string};
paramSubscription:Subscription;
queryParameter:Subscription;

  constructor(private serversService: ServersService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {

    this.route.data.subscribe((data)=>{

      this.server=data["server"];
    });
//+this.route.snapshot.params["id"]
    /* this.server = this.serversService.getServer(+this.route.snapshot.params["id"]);

    this.paramSubscription=this.route.params.subscribe((params)=>{
      this.server = this.serversService.getServer(+params["id"]);
    });
    */
    
  }
  onEdit(id){
this.router.navigate(["edit"],{relativeTo:this.route,queryParamsHandling:"preserve"})
  }
ngOnDestroy(){
  //this.paramSubscription.unsubscribe();
}
}
