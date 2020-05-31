import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CmsProductCarouselComponent as model, Product, ProductScope, ProductService } from '@spartacus/core';
import { CmsComponentData } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-custom-product-carousel',
  templateUrl: './custom-product-carousel.component.html',
  styleUrls: ['./custom-product-carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class CustomProductCarouselComponent {
  protected readonly PRODUCT_SCOPE = ProductScope.LIST;
  private componentData$: Observable<model> = this.componentData.data$.pipe(
    filter(data => {
      return data.productCodes !== undefined;
    })
  );


  /**
   * returns an Obervable string for the title.
   */
  title$: Observable<string> = this.componentData$.pipe(
    map((data) => data.title)
  );

  /**
     * Obervable that holds an Array of Observables. This is done, so that
     * the component UI could consider to lazy load the UI components when they're
     * in the viewpoint.
     */
  items$: Observable<Observable<Product>[]> = this.componentData$.pipe(
    map((data) => data.productCodes.trim().split(' ')),
    map((codes) =>
      codes.map((code) => this.productService.get(code, this.PRODUCT_SCOPE))
    )
  );


  constructor(
    protected componentData: CmsComponentData<model>,
    protected productService: ProductService
  ) {

  }



}
