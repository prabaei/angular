import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListServices } from "../shopping-list/shopping-list.services";
import { Subject } from "rxjs";

@Injectable()
export class RecipeServices{

    recipeSelected:Subject<Recipe> = new Subject<Recipe>();
    recipeListOnChange:Subject<Recipe[]> = new Subject<Recipe[]>()
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
          this.recipeListOnChange.next(this.recipes.slice());
      }
      updateRecipe(index:number,recipe:Recipe){
          this.recipes[index]=recipe;
          this.recipeListOnChange.next(this.recipes.slice());
      }
deleteRecipe(index:number){
    this.recipes.splice(index,1);
    this.recipeListOnChange.next(this.recipes.slice());
}
      addIngredientList(ele:Ingredient[]){
        //console.log("added list");
this.shopigListSer.addIngredientList(ele);
    }
    getSingleRecipe(index:number){
        return this.recipes.slice()[index];
        //this.recipeSelected.next(this.recipes.slice()[index]);
    }

}