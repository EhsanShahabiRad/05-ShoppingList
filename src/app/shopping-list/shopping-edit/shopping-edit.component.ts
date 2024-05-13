import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingrediant } from '../../Shared/ingrediant.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingrediantAdded = new EventEmitter<Ingrediant>();
  onAddItem() {
   const ingrediantName = this.nameInputRef.nativeElement.value;
   const ingrediantAmount = this.amountInputRef.nativeElement.value;
    const newingrediant = new Ingrediant
      (ingrediantName,ingrediantAmount);
    this.ingrediantAdded.emit(newingrediant);
  }
}
