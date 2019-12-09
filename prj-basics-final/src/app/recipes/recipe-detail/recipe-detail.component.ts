import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeServices } from '../recipe.service';
import { ShoppingListServices } from 'src/app/shopping-list/shopping-list.services';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
 @Input() recipe:Recipe;
  constructor(private recipeSer:RecipeServices) { }

  ngOnInit() {
    
  }
  SendToshoppinglist(){
    this.recipeSer.addIngredientList(this.recipe.Ingredients);
  }
  

}
