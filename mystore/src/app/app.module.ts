import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { translationChunksConfig, translations } from '@spartacus/assets';
import { B2cStorefrontModule, CarouselModule, MediaModule} from '@spartacus/storefront';
import { NavigationModule} from '@spartacus/storefront/fesm2015/spartacus-storefront';

import { AppComponent } from './app.component';
import { CustomProductCarouselComponent } from './custom-product-carousel/custom-product-carousel.component';
import { SpartacusHeroBannerComponent } from './spartacus-hero-banner/spartacus-hero-banner.component';
import { CustomCategoryNavigationComponent } from './custom-category-navigation/custom-category-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomProductCarouselComponent,
    SpartacusHeroBannerComponent,
    CustomCategoryNavigationComponent
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
        SpartacusHeroBannerComponent: {
          component: SpartacusHeroBannerComponent,
        },
        ProductCarouselComponent: {
          component: CustomProductCarouselComponent,
        },
        CategoryNavigationComponent: {
          component: CustomCategoryNavigationComponent,
        }

      }
    }),
    BrowserTransferStateModule,
    MediaModule,
    CarouselModule,
    RouterModule,
    NavigationModule
  ],
  entryComponents: [CustomProductCarouselComponent,
    SpartacusHeroBannerComponent,CustomCategoryNavigationComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
