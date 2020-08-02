import { Component, OnInit } from "@angular/core";
import { User } from "./user";

@Component({
  selector: "app-ng-directives",
  templateUrl: "./ng-directives.component.html",
})
export class NgDirectivesComponent implements OnInit {
  isValid: boolean = true;
  age: number = 12;
  nums = [1, 2, 3, 4];

  cars = [
    {
      name: "BMW",
      value: "25641",
    },
    {
      name: "Apple",
      value: "45876",
    },
    {
      name: "Benz",
      value: "65784",
    },
    {
      name: "Toyota",
      value: "254",
    },
  ];
  users = [new User("user1", 20), new User("user2", 22), new User("user3", 30)];
  changeValue(valid: boolean) {
    this.isValid = valid;
  }
  ngOnInit() {}
}
