import { ShoppingListService } from './../shopping-list.service';
import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { IIngredient } from 'src/app/shared/ingredient.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../store/shopping-list.actions';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('form') shoppingListForm: NgForm;
  subscription$: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: IIngredient;

  constructor(
    private _shoppingListService: ShoppingListService,
    private store: Store<{ shoppingList: { ingredients: IIngredient[] } }>
  ) { }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

  ngOnInit() {
    this.subscription$ = this._shoppingListService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this._shoppingListService.getIngredient(index);
          this.shoppingListForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          });
        }
      );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new IIngredient(value.name, value.amount, false);

    if (this.editMode) {
      this._shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.shoppingListForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this._shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

}
