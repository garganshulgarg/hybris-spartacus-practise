import { Component, Input, OnInit } from '@angular/core';
import { Product, ProductService } from '@spartacus/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-custom-product-view',
  templateUrl: './custom-product-view.component.html',
  styleUrls: ['./custom-product-view.component.scss']
})
export class CustomProductViewComponent implements OnInit {

  @Input('product') productID: string;
  productData: Product = null;

  constructor(private productService: ProductService,config: NgbCarouselConfig) { }

  ngOnInit() {
    this.productService.get(this.productID).subscribe(productDetails => {
      this.productData = productDetails;
    });
  }

  fetchProductDetails(): Product {
    if (this.productData) {
      return this.productData;
    }
    return null;
  }



}
