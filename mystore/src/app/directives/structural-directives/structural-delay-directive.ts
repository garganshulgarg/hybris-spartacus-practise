import { Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";

@Directive({
  selector: "[cDelay]",
})
export class DelayDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}
  @Input() set cDelay(delay: number) {
    this.viewContainer.clear();
    setTimeout(() => {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }, delay);
  }
}
