import { Component, OnInit } from '@angular/core';
import { Ingrediant } from '../Shared/ingrediant.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent implements OnInit {
  ingrediants: Ingrediant[] = [
    new Ingrediant('Apple', 5),
    new Ingrediant('Tomato', 10),
  ];

  OnIngrediantAdded(newIngrediant: Ingrediant) {
    this.ingrediants.push(newIngrediant);
  }
  constructor() {}
  ngOnInit(): void {}
}
