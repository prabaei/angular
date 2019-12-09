import { NgModule } from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const route:Routes = [
    {path:'',redirectTo:"/recipe"},
    {path:'recipe',component:RecipesComponent},
    {path:'shopping-list',component:ShoppingListComponent}
]
@NgModule({
    imports:[
        RouterModule.forRoot(route)
    ],
    exports:[
        NgModule
    ]
})
export class appRoute{

}