import { Component, OnDestroy, OnInit, Input,Pipe } from '@angular/core';
import { Product, ProductService } from '@spartacus/core';
import { CmsProductCarouselComponent } from '@spartacus/core';
import { CmsComponentData } from '@spartacus/storefront';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { take, distinctUntilChanged, tap, map, debounceTime, startWith, filter, switchMap, shareReplay, first, skipWhile, endWith, withLatestFrom, flatMap, observeOn, mergeMap, scan, distinctUntilKeyChanged, pluck } from 'rxjs/operators';
//import { CustomProductViewComponent } from './custom-product-view/custom-product-view.component';
@Component({
  selector: 'app-custom-product-carousel',
  templateUrl: './custom-product-carousel.component.html',
  styleUrls: ['./custom-product-carousel.component.scss'],

})
export class CustomProductCarouselComponent implements OnInit, OnDestroy {


  title: string;
  productCodes: string[];
  //@Input('product') productID: string;
  //productData: Product = null;
  productObj:string[];
  items$:[];
  productID1: string;
  productData1: Product = null;
  constructor(
    private cmsComponentData: CmsComponentData<CmsProductCarouselComponent>,config: NgbCarouselConfig,private productService: ProductService) {
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }


  ngOnInit(): void {
    this.cmsComponentData.data$.subscribe(data => {
      this.title = data.title;
      if (data.productCodes) {
        this.productCodes = data.productCodes.split(" ");
      }


    });

    //tried adding product details to the product
    //need to add all products details in map(working on it)
    for(var i=0;i<this.productCodes.length;i++){
      this.productID1=this.productCodes[i];
      this.productService.get(this.productID1).subscribe(productDetails => {
      this.productData1=productDetails;
      });
    }


  }


  ngOnDestroy(): void {
  }



}
