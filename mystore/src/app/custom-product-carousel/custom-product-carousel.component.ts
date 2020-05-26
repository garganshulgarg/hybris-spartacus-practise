import { Component, OnDestroy, OnInit } from '@angular/core';
import { CmsProductCarouselComponent } from '@spartacus/core';
import { CmsComponentData } from '@spartacus/storefront';

@Component({
  selector: 'app-custom-product-carousel',
  templateUrl: './custom-product-carousel.component.html',
  styleUrls: ['./custom-product-carousel.component.scss'],

})
export class CustomProductCarouselComponent implements OnInit, OnDestroy {


  title: string;
  productCodes: string[];

  constructor(
    private cmsComponentData: CmsComponentData<CmsProductCarouselComponent>) { }


  ngOnInit(): void {
    this.cmsComponentData.data$.subscribe(data => {
      this.title = data.title;
      if (data.productCodes) {
        this.productCodes = data.productCodes.split(" ");
      }

    });
  }
  ngOnDestroy(): void {
  }



}
