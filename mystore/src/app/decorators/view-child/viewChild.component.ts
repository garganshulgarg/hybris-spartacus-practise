import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
  ViewContainerRef,
} from "@angular/core";
import { WriterComponent } from "./writer.component";

@Component({
  selector: "app-vc",
  template: `
    <h2>@ViewChildren using Component</h2>
    <div>
      <writer name="writer-a" book="book-abc"></writer> <br />
      <writer name="writer-b" book="book-def"></writer> <br />
      <writer name="writer-c" book="book-xyz"></writer> <br />
      <writer
        name="writer-d"
        book="book-ghj"
        *ngIf="allWritersVisible"
      ></writer>
      <br />
      <writer
        name="writer-e"
        book="book-kjk"
        *ngIf="allWritersVisible"
      ></writer>
    </div>
    <button class="btn btn-primary" (click)="onShowAllWriters()">
      <label *ngIf="!allWritersVisible">Show More</label>
      <label *ngIf="allWritersVisible">Show Less</label>
    </button>
    <hr />
  `,
})
export class ViewChildComponent implements AfterViewInit {
  @ViewChildren(WriterComponent)
  writers1: QueryList<WriterComponent>;

  @ViewChildren(WriterComponent, { read: ElementRef })
  writers2: QueryList<ElementRef>;

  @ViewChildren(WriterComponent, { read: ViewContainerRef })
  writers3: QueryList<ViewContainerRef>;

  allWritersVisible = false;

  ngAfterViewInit() {
    console.log("--- @ViewChildren + Component ---");

    // this.writers1.changes.subscribe((list) => {
    //   list.forEach((writer) =>
    //     console.log(writer.writerName + " - " + writer.bookName)
    //   );
    // });
    console.log("Result with component:");
    // we get result in componentType
    // this.writers1._results.forEach((writer) =>
    //   console.log(writer.writerName + " - " + writer.bookName)
    // );

    console.log("Result with ElementRef:");
    this.writers2.forEach((el) => console.log(el));
    // this.writers2._results.forEach((writer) =>
    //   console.log(writer.nativeElement.innerHTML)
    // );

    console.log("Result with ViewContainerRef:"); //we can see parent component data and old values
    this.writers3.forEach((vref) => console.log(vref));
  }
  onShowAllWriters() {
    this.allWritersVisible = this.allWritersVisible === true ? false : true;
  }
}
