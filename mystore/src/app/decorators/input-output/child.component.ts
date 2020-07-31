import { Component, EventEmitter, Input, Output } from "@angular/core";
@Component({
  selector: "child",
  template: `
    <b>{{ cityMsg }}</b>
    <ul>
      <li *ngFor="let cname of myctArray">
        {{ cname }}
      </li>
    </ul>

    <b>{{ addNumMsg }}</b
    ><br />
    <div>
      First Number :<input
        class="col-4 form-control"
        (input)="num1 = $event.target.value"
      />
      <br />
      Second Number:<input
        class="col-4 form-control"
        (input)="num2 = $event.target.value"
      />
      <br />
      <button class="btn btn-success" (click)="addNumber()">Add Number</button>
    </div>
  `,
})
export class ChildComponent {
  @Input()
  ctMsg: string;

  @Input("ctArray")
  myctArray: Array<string>;

  @Output("addNumberEvent")
  addNumEvent = new EventEmitter<number>();

  addNumMsg = "Add Number";
  num1: "";
  num2: "";

  addNumber() {
    this.addNumEvent.emit(parseInt(this.num1) + parseInt(this.num2));
  }
}
