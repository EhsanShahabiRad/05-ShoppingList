import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../Shared/ingredient.model';
import { ShoppingListService } from './Services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent implements OnInit {
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.Ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.onChangeIngredient.subscribe(
      (Ingredients: Ingredient[]) => (this.Ingredients = Ingredients)
    );
  }

  Ingredients: Ingredient[];
}
