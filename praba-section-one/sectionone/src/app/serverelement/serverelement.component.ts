import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-serverelement',
  templateUrl: './serverelement.component.html',
  styleUrls: ['./serverelement.component.css']
})
export class ServerelementComponent implements OnInit {
  @Input() server:{type:string,name:string};
  constructor() { }

  ngOnInit() {
  }
  changestate(state:string){
    this.server.type=state;
console.log(state);

  }
}
