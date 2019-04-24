import { ShoppingListService } from './../shopping-list.service';
import {
  Component,
  OnInit
} from '@angular/core';
import { IIngredient } from 'src/app/shared/ingredient.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  constructor(private _shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new IIngredient(value.name, value.amount);
    this._shoppingListService.addIngredient(newIngredient);
  }

}
