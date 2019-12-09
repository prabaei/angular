import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListServices {

    ingredintsarray :EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>()
   private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];

      getIngredients(){
          return this.ingredients.slice();
      }
      addIngredient(ele:Ingredient){
         // console.log("added");
this.ingredients.push(ele);
this.ingredintsarray.emit(this.ingredients.slice());
      }
      addIngredientList(ele:Ingredient[]){
        console.log("added list");
    //    ele.forEach((e,i)=>{
    //     this.ingredients.push(e);
    //    });
    this.ingredients.push(...ele);

this.ingredintsarray.emit(this.ingredients.slice());
    }
}