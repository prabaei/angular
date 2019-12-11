import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeServices } from '../recipe.service';
import { ShoppingListServices } from 'src/app/shopping-list/shopping-list.services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe:Recipe;
  recipeId:number;
  constructor(private recipeSer:RecipeServices,private route:ActivatedRoute,private router:Router) { }
deleteRecipe(){
  this.recipeSer.deleteRecipe(this.recipeId);
}
  ngOnInit() {
    this.route.params.subscribe((param)=>{
      this.recipeId=+param["id"];
      this.recipe=this.recipeSer.getSingleRecipe(this.recipeId);
    });
    //this.recipe=this.recipeSer.getRecipe()[+this.route.snapshot.params["id"]];
  }
  SendToshoppinglist(){
    this.recipeSer.addIngredientList(this.recipe.Ingredients);
  }
  EditRecipe(){
    this.router.navigate(["edit"],{relativeTo:this.route})
  }

}
