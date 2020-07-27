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
  clickCount;
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
  displayCounter(count) {
    //event emitter example
    this.clickCount = "Button clicked " + count + " times";
  }
}
