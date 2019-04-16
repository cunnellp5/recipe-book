import { ShoppingListService } from './../shopping-list.service';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef
} from '@angular/core';
import { IIngredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private _shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new IIngredient(ingredientName, ingredientAmount);
    this._shoppingListService.addIngredient(newIngredient);
  }

}
