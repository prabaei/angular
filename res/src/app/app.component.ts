import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
    {type:'server',content:"dd",name:'kurka'},
    {type:'server',content:"dd",name:'kurka'}
];
onServerAdded(serverdata:{servername:string,servercontent:string}) {
   this.serverElements.push({
     type: 'server',
     name: serverdata.servername,
     content: serverdata.servercontent
   }); 
 }

 onBlueprintAdded(serverdata:{servername:string,servercontent:string}) {
    this.serverElements.push({
     type: 'blueprint',
     name: serverdata.servername,
     content: serverdata.servercontent
   }); 
 }
}
