import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import {
  BrowserModule,
  BrowserTransferStateModule,
} from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { translationChunksConfig, translations } from "@spartacus/assets";
import { UrlModule } from "@spartacus/core";
import {
  B2cStorefrontModule,
  CarouselModule,
  MediaModule,
} from "@spartacus/storefront";
import { AppComponent } from "./app.component";
import { CustomLoginFormComponent } from "./custom-login-form/custom-login-form.component";
import { CustomProductCarouselComponent } from "./custom-product-carousel/custom-product-carousel.component";
import { SpartacusHeroBannerComponent } from "./spartacus-hero-banner/spartacus-hero-banner.component";
import { PipesComponent } from "./pipes/pipes.component";

@NgModule({
  declarations: [
    AppComponent,
    CustomProductCarouselComponent,
    SpartacusHeroBannerComponent,
    CustomLoginFormComponent,
    PipesComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl: "https://localhost:9002",
          prefix: "/rest/v2/",
        },
      },
      context: {
        baseSite: ["electronics-spa"],
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: "en",
      },
      features: {
        level: "1.5",
        anonymousConsents: true,
      },
      cmsComponents: {
        SpartacusHeroBannerComponent: {
          component: SpartacusHeroBannerComponent,
        },
        ProductCarouselComponent: {
          component: CustomProductCarouselComponent,
        },
        ReturningCustomerLoginComponent: {
          //component name should be same as mentioned in the cms
          component: CustomLoginFormComponent,
        },
      },
    }),
    BrowserTransferStateModule,
    RouterModule.forRoot([
      //register route component
      {
        path: "pipes", // url '/binding'
        component: PipesComponent,
      },

      {
        path: "",
        redirectTo: "/",
        pathMatch: "full",
      },
    ]),
    MediaModule,
    CarouselModule,
    RouterModule,
    ReactiveFormsModule,
    UrlModule,
  ],
  entryComponents: [
    CustomProductCarouselComponent,
    SpartacusHeroBannerComponent,
    CustomLoginFormComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
