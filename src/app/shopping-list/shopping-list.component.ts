import { Component, OnInit } from '@angular/core';
import { IIngredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: IIngredient[] = [
    new IIngredient('apples', 5),
    new IIngredient('bananas', 11)
  ];

  constructor() { }

  ngOnInit() {
  }

}
