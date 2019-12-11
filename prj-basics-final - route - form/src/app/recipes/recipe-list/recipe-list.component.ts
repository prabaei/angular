import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeServices } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] ;
 
 // constructor(){}
 
  constructor(private  recipeService:RecipeServices,private route:ActivatedRoute,private router:Router ) { }

  ngOnInit() {
    this.recipes=this.recipeService.getRecipe();
  }
  newRecipe(){
this.router.navigate(["new"],{relativeTo:this.route})
  }

}
