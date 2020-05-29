import { Component, OnDestroy, OnInit, Input,Pipe,ChangeDetectionStrategy } from '@angular/core';
import { Product, ProductService,ProductScope } from '@spartacus/core';
import { CmsProductCarouselComponent as model } from '@spartacus/core';
import { CmsComponentData } from '@spartacus/storefront';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { take, distinctUntilChanged, tap, map, debounceTime, startWith, filter, switchMap, shareReplay, first, skipWhile, endWith, withLatestFrom, flatMap, observeOn, mergeMap, scan, distinctUntilKeyChanged, pluck } from 'rxjs/operators';
//import { CustomProductViewComponent } from './custom-product-view/custom-product-view.component';
@Component({
  selector: 'app-custom-product-carousel',
  templateUrl: './custom-product-carousel.component.html',
  styleUrls: ['./custom-product-carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
//export class CustomProductCarouselComponent implements OnInit, OnDestroy{
export class CustomProductCarouselComponent {
protected readonly PRODUCT_SCOPE = ProductScope.LIST;
private componentData$: Observable<model> = this.componentData.data$.pipe(
    filter(Boolean)
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
      protected productService: ProductService,config: NgbCarouselConfig
    )
    {

      console.log(this.title$);
    }



}
