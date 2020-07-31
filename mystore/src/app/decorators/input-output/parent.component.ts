import { Component } from "@angular/core";
@Component({
  selector: "input-output",
  template: `
    <h1>{{ parentTitle }}</h1>

    <child
      [ctMsg]="cityMsg"
      [ctArray]="cityArray"
      (addNumberEvent)="printSum($event)"
    >
    </child>
    <p>Sum: {{ sum }}</p>
  `,
})
export class ParentComponent {
  parentTitle = "Input and Output";

  //Property for child component one
  cityMsg = "Indian City Names";
  cityArray = ["Varanasi", "Delhi", "Mumbai"];
  sum = "";

  printSum(res) {
    this.sum = res;
  }
}
