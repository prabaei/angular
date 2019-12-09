import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListServices } from "../shopping-list/shopping-list.services";

@Injectable()
export class RecipeServices{

    recipeSelected:EventEmitter<Recipe> = new EventEmitter<Recipe>();
   private recipes: Recipe[] = [
        new Recipe('pakoda', 'one', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',[
            new Ingredient("bun",5),new Ingredient("kose",2)
        ]),
        new Recipe('raitha', 'two', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',[
            new Ingredient("onion",5),new Ingredient("mango",2)
        ])
      ];

      constructor(private shopigListSer:ShoppingListServices){}

      getRecipe(){
          return this.recipes.slice();
      }
       addRecipe(params:Recipe) {
          this.recipes.push(params);
      }

      addIngredientList(ele:Ingredient[]){
        //console.log("added list");
this.shopigListSer.addIngredientList(ele);
    }
    getSingleRecipe(index:number){
        return this.recipes.slice()[index];
    }

}