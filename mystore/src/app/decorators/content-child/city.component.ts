import { Component, Input } from "@angular/core";

@Component({
  selector: "city",
  template: ``,
})
export class CityComponent {
  @Input() cityId: string;
  @Input() cityName: string;
}
