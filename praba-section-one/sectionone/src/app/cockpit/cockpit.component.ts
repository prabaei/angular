import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ServerService } from '../shared/app.service.server';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  //providers:[ServerService]
})
export class CockpitComponent implements OnInit {

serverName:string;
serverType:string;
constructor(private serverser:ServerService){

}

  ngOnInit() {
    this.serverser.ServerCreated.subscribe((servername:string)=>{
alert(servername);
    });
  }
addServer(){
this.serverser.addServer({type:"note",name:this.serverName});

}
}
