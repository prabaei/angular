import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeServices } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  //imageurl1:string="hithere";
  recipeForm:FormGroup;
  id:number;
  isEditMode:boolean;
  constructor(private route:ActivatedRoute,private recipeSer:RecipeServices,private router:Router) { }

  private initForm(){
    let recipeName='';
    let imagepath='';
    let description='';
    let recipeIngredient = new FormArray([]);
    if(this.isEditMode){
      const recipe=this.recipeSer.getSingleRecipe(this.id);
      console.log(recipe);
      recipeName=recipe.name;
      imagepath=recipe.imagePath;
      description=recipe.description;
      if(recipe["Ingredients"]){
        for(let d of recipe.Ingredients){
          recipeIngredient.push(new FormGroup({
            'name':new FormControl(d.name,Validators.required),
            'amount':new FormControl(d.amount,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
          }));                    

        }
      }
    }
    this.recipeForm = new FormGroup({
      'name':new FormControl(recipeName,Validators.required),
      'imagePath':new FormControl(imagepath,Validators.required),
      'description':new FormControl(description,Validators.required),
      'Ingredients':recipeIngredient
    });
  }
  cancelForm(){
    //this.recipeForm.reset();
    this.router.navigate(['../'],{relativeTo:this.route})
  }
  submitForm(){
    if(!this.isEditMode)
    this.recipeSer.addRecipe(this.recipeForm.value);
    else
    this.recipeSer.updateRecipe(this.id,this.recipeForm.value);
    this.router.navigate(["recipe"]);
    this.recipeForm.reset();
    this.isEditMode=false;
  }

  addIngredient(){
    (<FormArray>this.recipeForm.get("Ingredients")).push(new FormGroup({
      "name":new FormControl(null,Validators.required),
      "amount":new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
    }));
  }
  ngOnInit() {
this.route.params.subscribe((param)=>{
  this.id=+param["id"];
  this.isEditMode= param["id"] != null;
  this.initForm();
  console.log(this.isEditMode);
});
  }

}
