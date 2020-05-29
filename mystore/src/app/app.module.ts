import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { translationChunksConfig, translations } from '@spartacus/assets';
import { B2cStorefrontModule } from '@spartacus/storefront';
import { AppComponent } from './app.component';
import { CustomProductCarouselComponent } from './custom-product-carousel/custom-product-carousel.component';
import { CustomProductViewComponent } from './custom-product-view/custom-product-view.component';
import { CarouselComponent, CarouselModule, CarouselService,MediaComponent,MediaModule, MediaService,IconModule } from '@spartacus/storefront/fesm2015/spartacus-storefront';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';	
@NgModule({
  declarations: [
    AppComponent,
    CustomProductCarouselComponent,
    CustomProductViewComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl: 'https://localhost:9002',
          prefix: '/rest/v2/'
        }

      },
      context: {
        baseSite: ['electronics-spa']
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en'
      },
      features: {
        level: '1.5',
        anonymousConsents: true
      },
      cmsComponents: {
        ProductCarouselComponent: {
          component: CustomProductCarouselComponent,
        }
      }
    }),
    BrowserTransferStateModule,
    MediaModule,
    CarouselModule,
    IconModule,
    NgbModule,
  ],
  entryComponents: [CustomProductCarouselComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
