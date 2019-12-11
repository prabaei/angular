import { Ingredient } from "../shared/ingredient.model";
// import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

export class ShoppingListServices {

    ingredintsarray :Subject<Ingredient[]> = new Subject<Ingredient[]>()
    editIngrident:Subject<number> = new Subject<number>();
   private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];
deleteIngredient(index:number){
this.ingredients.splice(index,1);
this.ingredintsarray.next(this.ingredients.slice());
}
      getItemByIndex(index:number){
return this.ingredients.slice()[index];
      }
      getIngredients(){
          return this.ingredients.slice();
      }
updateIngredient(index:number,ele:Ingredient){
    this.ingredients[index]=ele;
    this.ingredintsarray.next(this.ingredients.slice());
}

      addIngredient(ele:Ingredient){
         // console.log("added");
this.ingredients.push(ele);
this.ingredintsarray.next(this.ingredients.slice());
      }
      addIngredientList(ele:Ingredient[]){
        console.log("added list");
    //    ele.forEach((e,i)=>{
    //     this.ingredients.push(e);
    //    });
    this.ingredients.push(...ele);

this.ingredintsarray.next(this.ingredients.slice());
    }
}