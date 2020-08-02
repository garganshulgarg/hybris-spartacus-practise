import { Component, Input } from "@angular/core";
import { User } from "./user";
@Component({
  selector: "emp-app",
  template: `
    <br />
    {{ emp.name }} - {{ emp.age }}
  `,
})
export class EmpComponent {
  @Input() emp: User;
  // to fetch cars obeject can be written like this @Input() emp: Object;
}
