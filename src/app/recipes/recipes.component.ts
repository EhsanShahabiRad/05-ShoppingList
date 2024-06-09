import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './Services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  providers: [RecipeService],
})
export class RecipesComponent {
  constructor(private recipeService: RecipeService) {
    this.recipeService.onSelectRecipe.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }
  selectedRecipe: Recipe;
}
