import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../Shared/ingredient.model';

@Injectable()
export class RecipeService {
  onSelectRecipe = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This Is A Simple Test',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg',
      [new Ingredient('biff', 1), new Ingredient('tomato', 3)]
    ),
    new Recipe(
      'Another Test Recipe',
      'Another Simple Test',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg',
      [new Ingredient('chicken', 3), new Ingredient('garlic', 5)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
