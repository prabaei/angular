import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListServices } from './shopping-list.services';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
  ,providers:[]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] ;

  constructor(private shoppinglistSer:ShoppingListServices) { }

  ngOnInit() {
this.ingredients=this.shoppinglistSer.getIngredients();
this.shoppinglistSer.ingredintsarray.subscribe((data)=>{
  this.ingredients=data;
});
  }
//   addIngredient(ing:Ingredient){
// this.ingredients.push(ing);
//   }

}
