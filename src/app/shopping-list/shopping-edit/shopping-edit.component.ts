import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from '../../Shared/ingredient.model';
import { ShoppingListService } from '../Services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent implements OnInit {
  constructor(private shoppingListService: ShoppingListService) {}
  ngOnInit(): void {
    this.shoppingListService = this.shoppingListService;
  }

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  onAddItem() {
    const IngredientName = this.nameInputRef.nativeElement.value;
    const IngredientAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(
      IngredientName,
      Number(IngredientAmount)
    );
    this.shoppingListService.addIngredient(newIngredient);
  }
}
