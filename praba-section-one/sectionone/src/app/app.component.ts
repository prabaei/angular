import { Component } from '@angular/core';
import { ServerService } from './shared/app.service.server';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers:[ServerService]
})
export class AppComponent {

  constructor(private serverser:ServerService){

  }
  title = 'sectionone';
getServerlist(){
return this.serverser.servers;
}
  onServerCreated(server:{type:string,name:string}){
    console.log('hura');
//this.servers.push(server);
  }
}
