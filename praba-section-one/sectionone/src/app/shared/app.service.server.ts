import { LoggingServices } from './app.service.logging';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ServerService{

    ServerCreated:EventEmitter<string>=new EventEmitter<string>();
    constructor(private logser:LoggingServices){}

    servers:{type:string,name:string}[]=[{type:"windows",name:"ioasddev22"},{type:"windows",name:"ioasddev23"}];

    addServer(server:{type:string,name:string}){
this.servers.push(server);
this.logser.logStatus("server" +" "+server.name);
this.ServerCreated.emit(server.name);
    }

}