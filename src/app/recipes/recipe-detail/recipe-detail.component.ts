import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/Services/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent implements OnInit {
  constructor(private shoppingListService: ShoppingListService) {}
  ngOnInit(): void {}
  
  @Input() recipe: Recipe;

  onAddToShoppingList() {
    this.shoppingListService.addIngredients(this.recipe.Ingredients);
  }
}
