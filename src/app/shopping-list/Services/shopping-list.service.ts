import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../../Shared/ingredient.model';

@Injectable()
export class ShoppingListService {
  onChangeIngredient = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredientToAdd: Ingredient) {
    const existingIngredientIndex = this.ingredients.findIndex(
      (ingredient) => ingredient.name === ingredientToAdd.name
    );
    if (existingIngredientIndex !== -1) {
      this.ingredients[existingIngredientIndex].amount += Number(
        ingredientToAdd.amount
      );
    } else {
      this.ingredients.push(ingredientToAdd);
    }

    this.onChangeIngredient.emit(this.ingredients.slice());
  }
  addIngredients(ingredientsToAdd: Ingredient[]) {
    ingredientsToAdd.forEach((ingredientToAdd) => {
      this.addIngredient(ingredientToAdd);
    });
    this.onChangeIngredient.emit(this.ingredients.slice());
  }
}
