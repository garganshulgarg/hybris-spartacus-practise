import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-binding",
  templateUrl: "./binding.component.html",
})
export class BindingComponent {
  userId: string = "User1";
  Colors = ["RED", "GREEN", "YELLOW"];
  btnState = "false";
  isReq = false;
  constructor() {}
  inputChange(e) {
    this.userId = e.target.value;
  }

  btnStateChange(state) {
    this.btnState = state;
  }
  textColorChange() {
    this.isReq = true;
  }
}
