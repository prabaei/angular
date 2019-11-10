import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Input() element:{type:string,content:string,name:string};
  constructor() { }

  ngOnInit() {
  }

}
