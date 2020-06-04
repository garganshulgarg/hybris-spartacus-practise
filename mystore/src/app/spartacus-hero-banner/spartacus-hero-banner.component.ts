import { Component, OnInit } from '@angular/core';
import { CmsComponentData } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SpartacusHeroBannerComponentData } from '../shared/custom-cms.model';



@Component({
  selector: 'app-spartacus-hero-banner',
  templateUrl: './spartacus-hero-banner.component.html',
  styleUrls: ['./spartacus-hero-banner.component.scss']
})
export class SpartacusHeroBannerComponent implements OnInit {

  private componentData$: Observable<SpartacusHeroBannerComponentData> = this.componentData.data$;
  /**
   * returns an Obervable string for the headline.
   */
  headline$: Observable<string> = this.componentData$.pipe(
    map((data) => data.headline)
  );
  constructor(protected componentData: CmsComponentData<SpartacusHeroBannerComponentData>) { }

  ngOnInit() {
  }



}
