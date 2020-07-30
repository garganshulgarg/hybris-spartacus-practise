import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit,
} from "@angular/core";
import { CityComponent } from "./city.component";

@Component({
  selector: "favourite-cities",
  template: `
    <b>Top Favourite Cities</b>
    <ng-template ngFor let-city [ngForOf]="topCities">
      <br />{{ city.cityId }} - {{ city.cityName }}
    </ng-template>

    <br /><b>All Favourite Cities</b>
    <ng-template ngFor let-city [ngForOf]="allCities">
      <br />{{ city.cityId }} - {{ city.cityName }}
    </ng-template>
  `,
})
export class FavouriteCitiesComponent implements AfterContentInit {
  //descendants: This is Boolean value. When it is true then direct children and other descendants will also be included. If the value is false then only direct children will be included. descendants is used as follows.
  @ContentChildren(CityComponent) topCities: QueryList<CityComponent>;
  @ContentChildren(CityComponent, { descendants: true }) allCities: QueryList<
    CityComponent
  >;

  ngAfterContentInit() {
    console.log("all cities");
    this.allCities.forEach((el) => console.log(el));
    console.log("top cities");
    this.topCities.forEach((el1) => console.log(el1));
  }
}
