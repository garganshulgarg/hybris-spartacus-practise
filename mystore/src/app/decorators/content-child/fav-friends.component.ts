import {
  Component,
  ContentChildren,
  QueryList,
  ElementRef,
  AfterContentInit,
  ContentChild,
} from "@angular/core";

@Component({
  selector: "favourite-friends",
  template: `
    <b>All Favourite Friends</b>
    <br />
    {{ allFriends }}
  `,
})
export class FavouriteFriendsComponent implements AfterContentInit {
  @ContentChildren("name") allFriendsRef: QueryList<ElementRef>; //to fetch query list of element from DOM
  //@ContentChild("name") nameRef: ElementRef; // to fetch single element from DOM

  get allFriends(): string {
    return this.allFriendsRef
      ? this.allFriendsRef.map((f) => f.nativeElement.innerHTML).join(", ")
      : "";
  }
  // get friendName(): String {
  //   return this.nameRef.nativeElement.innerHTML;
  // }
  ngAfterContentInit() {
    console.log(this.allFriends + "  ContentChildren()");
    //  console.log(this.friendName + "  ContentChild()");
  }
}
