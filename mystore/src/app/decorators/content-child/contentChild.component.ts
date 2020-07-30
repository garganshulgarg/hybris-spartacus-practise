import { Component } from "@angular/core";

@Component({
  selector: "app-content-child",
  templateUrl: "./contentChild.component.html",
})
export class ContentChildComponent {
  showAllFriend = false;
  showAllCity = false;
  onShowAllCities() {
    this.showAllCity = this.showAllCity === true ? false : true; // using component
  }
  onShowAllFriends() {
    this.showAllFriend = this.showAllFriend === true ? false : true; // using ElementRef
  }
}
