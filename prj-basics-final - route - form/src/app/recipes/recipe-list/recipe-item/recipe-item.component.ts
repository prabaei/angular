import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeServices } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input()
  recipe:Recipe;

  @Input() indexid:number;
  // @Output()
  // redipeSelected:EventEmitter<void> = new EventEmitter<void>();
  constructor(private recipeSer:RecipeServices) { }

  ngOnInit() {
  }
  selectedRecipe() {
    //console.log('first Event emit');
    //this.redipeSelected.emit();
    this.recipeSer.recipeSelected.next(this.recipe);
    }
}
