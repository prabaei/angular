import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListServices } from '../shopping-list.services';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  // @ViewChild("ingridentName",{static:false}) ingrident:ElementRef;
  // @ViewChild("amount",{static:false}) amount:ElementRef;
  @ViewChild("f",{static:false}) shoppingForm:NgForm;
editMode:boolean;
editIndex:number;
editIngredient:Ingredient;
  ingredient:Ingredient;
  // @Output()
  // emitIngredient:EventEmitter<Ingredient> = new EventEmitter<Ingredient>();
  constructor(private shoppinglistSer:ShoppingListServices) { }

  ngOnInit() {

    this.shoppinglistSer.editIngrident.subscribe((index:number)=>{
      this.editIndex=index;
      this.editMode=true;
      this.editIngredient=this.shoppinglistSer.getItemByIndex(index);
      this.shoppingForm.setValue(
{
  'name':this.editIngredient.name,
  'amount':this.editIngredient.amount
}

      );
    });
  }


  deleteItem(){
    console.log('hi');
    this.shoppinglistSer.deleteIngredient(this.editIndex);
    this.editMode=false;
  this.shoppingForm.reset();
  }

  addIngrident(){
// const name = this.ingrident.nativeElement.value;
// console.log('hi'+name);
// const amount= this.amount.nativeElement.value;
// this.shoppinglistSer.addIngredient(new Ingredient(name,amount));
console.log(this.shoppingForm.value);
if(this.editMode){
  this.shoppinglistSer.updateIngredient(this.editIndex,this.shoppingForm.value);
  this.editMode=false;
  this.shoppingForm.reset();
}else{
this.shoppinglistSer.addIngredient(this.shoppingForm.value);
}
  }
}
