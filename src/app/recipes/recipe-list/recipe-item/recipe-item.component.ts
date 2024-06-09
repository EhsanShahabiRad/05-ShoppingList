import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../Services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css',
})
export class RecipeItemComponent {
  constructor(private recipeService: RecipeService) {}
  @Input() recipe: Recipe;


  onSelected() {
    this.recipeService.onSelectRecipe.emit(this.recipe);
  }
}
