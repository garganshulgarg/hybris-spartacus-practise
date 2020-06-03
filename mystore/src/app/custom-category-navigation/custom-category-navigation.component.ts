import { Component , CmsNavigationComponent} from '@angular/core';
import { Observable } from 'rxjs';
import { NavigationService,NavigationNode} from '@spartacus/storefront';

import { CmsComponentData } from '@spartacus/storefront';

@Component({
  selector: 'app-custom-category-navigation',
  templateUrl: './custom-category-navigation.component.html'
})
export class CustomCategoryNavigationComponent {
  node$: Observable<NavigationNode> = this.service.getNavigationNode(
    this.componentData.data$
  );


  data$: Observable<CmsNavigationComponent> = this.componentData.data$;


  constructor(
    protected componentData: CmsComponentData<CmsNavigationComponent>,
     protected service: NavigationService){
  }
}
