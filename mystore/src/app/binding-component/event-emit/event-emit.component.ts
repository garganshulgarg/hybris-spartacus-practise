import { Component, EventEmitter, Output } from "@angular/core";
@Component({
  selector: "event-emit",
  templateUrl: "./event-emit.component.html",
})
export class EventEmitComponent {
  @Output() valueChange = new EventEmitter();
  counter = 0;
  valueChanged() {
    this.counter = this.counter + 1;
    this.valueChange.emit(this.counter);
  }
}
