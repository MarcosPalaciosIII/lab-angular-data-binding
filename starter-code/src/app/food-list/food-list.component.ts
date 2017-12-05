import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  listOfFoods: any[] = foods;

  foodSearch: string = "";

  showConfig: any = {
    showAddFood: true
  };

  constructor() { }

  ngOnInit() {
  }

  toggleShow() {
    if (this.showConfig.showAddFood) {
      this.showConfig.showAddFood = false;
    }
    else {
      this.showConfig.showAddFood = true;
    }
  }

}
