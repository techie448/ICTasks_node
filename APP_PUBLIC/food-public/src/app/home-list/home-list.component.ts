import { FoodServiceService } from "./../food-service.service";
import { Food } from "./../food";
import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-home-list",
  templateUrl: "./home-list.component.html",
  styles: [],
  providers: [FoodServiceService]
})
export class HomeListComponent implements OnInit {
  foods: Food[];
  constructor(private foodService: FoodServiceService) {}

  ngOnInit(): void {
    this.foodService.getFoods().then((foods: Food[]) => {
      this.foods = foods.map(food => {
        return food;
      });
    });
  }
}
