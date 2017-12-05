import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {

  listOfFood: object[];

  newFood: object = {};

  constructor() { }

  ngOnInit() {
    this.listOfFood = foods
  }

  addFood() {
    this.listOfFood.push(this.newFood);

    // for(let key in this.newFood){
    //   this.newFood[key] = "";
    // }
    console.log(foods)
  }

}
