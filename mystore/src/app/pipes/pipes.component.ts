import { Component } from "@angular/core";
import { Person } from "./person";
import { Company } from "./company";
@Component({
  selector: "pipes-app",
  templateUrl: "pipes.component.html",
})
export class PipesComponent {
  message = "Hello World!";
  person = new Person("Mahesh", new Date(1980, 3, 12));
  company = new Company("PQR", this.person);
  cur: number = 10.263782;
  num: number = 2.5;
  myStr: string = "abcdefghijk";
}
