import { Directive, ElementRef, Input, AfterViewInit } from "@angular/core";

@Directive({
  selector: "[color]",
})
export class StyleDirectives implements AfterViewInit {
  @Input() inputColor: string;
  constructor(private elRef: ElementRef) {}
  ngAfterViewInit() {
    this.elRef.nativeElement.style.color = this.inputColor;
  }
}
