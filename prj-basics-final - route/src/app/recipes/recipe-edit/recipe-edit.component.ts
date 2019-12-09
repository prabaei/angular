import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id:number;
  isEditMode:boolean;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
this.route.params.subscribe((param)=>{
  this.id=+param["id"];
  this.isEditMode= param["id"] != null;
  console.log(this.isEditMode);
});
  }

}
