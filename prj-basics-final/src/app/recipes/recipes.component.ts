import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeServices } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeServices]
})
export class RecipesComponent implements OnInit {

  recipe:Recipe;
  constructor(private recipeSer:RecipeServices) { }

  ngOnInit() {
    this.recipeSer.recipeSelected.subscribe((data)=>{
      this.recipe=data;
    });
  }
  
}
