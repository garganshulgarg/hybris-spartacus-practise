import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[mouseAction]",
})
export class MouseActionDirective {
  constructor(private elRef: ElementRef) {}
  @HostListener("mouseover") onMouseOver() {
    this.changeBackgroundColor("darkgrey");
  }
  @HostListener("mouseleave") onMouseLeave() {
    this.changeBackgroundColor("red");
  }
  private changeBackgroundColor(color: string) {
    this.elRef.nativeElement.style.backgroundColor = color;
  }
}
