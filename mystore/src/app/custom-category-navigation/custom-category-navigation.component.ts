import { Component } from "@angular/core";
import { CmsNavigationComponent } from "@spartacus/core";
import {
  CmsComponentData,
  NavigationNode,
  NavigationService,
} from "@spartacus/storefront";
import { Observable } from "rxjs";

@Component({
  selector: "app-custom-category-navigation",
  templateUrl: "./custom-category-navigation.component.html",
})
export class CustomCategoryNavigationComponent {
  node$: Observable<NavigationNode> = this.service.getNavigationNode(
    this.componentData.data$
  );

  data$: Observable<CmsNavigationComponent> = this.componentData.data$;

  constructor(
    protected componentData: CmsComponentData<CmsNavigationComponent>,
    protected service: NavigationService
  ) {}
}
