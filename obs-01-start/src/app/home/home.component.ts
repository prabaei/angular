import { Component, OnInit } from '@angular/core';
import {interval,observable} from 'rxjs'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // interval(1000).subscribe((c)=>{
    //   console.log(c);
    // });
  }

}
