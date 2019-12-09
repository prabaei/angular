import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListServices } from '../shopping-list.services';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild("ingridentName",{static:false}) ingrident:ElementRef;
  @ViewChild("amount",{static:false}) amount:ElementRef;

  ingredient:Ingredient;
  // @Output()
  // emitIngredient:EventEmitter<Ingredient> = new EventEmitter<Ingredient>();
  constructor(private shoppinglistSer:ShoppingListServices) { }

  ngOnInit() {
  }
  addIngrident(){
const name = this.ingrident.nativeElement.value;
console.log('hi'+name);
const amount= this.amount.nativeElement.value;
this.shoppinglistSer.addIngredient(new Ingredient(name,amount));
  }
}
