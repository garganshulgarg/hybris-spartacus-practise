import { NgModule} from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { translationChunksConfig, translations } from '@spartacus/assets';
import { B2cStorefrontModule, CarouselModule, MediaModule} from '@spartacus/storefront';
import { AppComponent } from './app.component';
import { CustomProductCarouselComponent } from './custom-product-carousel/custom-product-carousel.component';
import { SpartacusHeroBannerComponent } from './spartacus-hero-banner/spartacus-hero-banner.component';
import { CustomLoginFormComponent } from './custom-login-form/custom-login-form.component';
import { LoginFormModule} from '@spartacus/storefront/fesm2015/spartacus-storefront';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfigModule, I18nModule, NotAuthGuard, UrlModule, } from '@spartacus/core';


@NgModule({
  declarations: [
    AppComponent,
    CustomProductCarouselComponent,
    SpartacusHeroBannerComponent,
    CustomLoginFormComponent

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
       ReturningCustomerLoginComponent: {                       //component name should be same as mentioned in the cms
           component: CustomLoginFormComponent,
        }

      }
    }),
    BrowserTransferStateModule,
    MediaModule,
    CarouselModule,
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UrlModule,
    LoginFormModule,
  ],
  // entryComponents: [CustomProductCarouselComponent,
  //   SpartacusHeroBannerComponent,CustomLoginFormComponent],
   entryComponents: [CustomProductCarouselComponent,
     SpartacusHeroBannerComponent,CustomLoginFormComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
