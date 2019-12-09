import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeServices } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] ;
 
 // constructor(){}
 
  constructor(private  recipeService:RecipeServices ) { }

  ngOnInit() {
    this.recipes=this.recipeService.getRecipe();
  }
 

}
