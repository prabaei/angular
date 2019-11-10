import { Component, OnInit ,EventEmitter,Output} from '@angular/core';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  newServerName = '';
  newServerContent = '';
@Output() onserveOrCreated = new EventEmitter<{servername:string,servercontent:string}>();
@Output() onblueCreated = new EventEmitter<{servername:string,servercontent:string}>();
  onAddServer() {
   /*  this.serverElements.push({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    }); */
    this.onserveOrCreated.emit({servername:this.newServerName,servercontent:this.newServerContent})
  }

  onAddBlueprint() {
 /*    this.serverElements.push({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    }); */
    this.onblueCreated.emit({servername:this.newServerName,servercontent:this.newServerContent})
  }
}
