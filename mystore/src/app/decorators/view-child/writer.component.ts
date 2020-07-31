import { Component, Input } from "@angular/core";

@Component({
  selector: "writer",
  template: ` writer:{{ writerName }} &nbsp;&nbsp; book:{{ bookName }} `,
})
export class WriterComponent {
  @Input("name") writerName: string;
  @Input("book") bookName: string;
}
