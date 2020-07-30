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
import { DecoratorsComponent } from "./decorators/decorators.component";
import { ViewChildComponent } from "./decorators/view-child/viewChild.component";
import { ContentChildComponent } from "./decorators/content-child/contentChild.component";
import { FavouriteFriendsComponent } from "./decorators/content-child/fav-friends.component";
import { FavouriteCitiesComponent } from "./decorators/content-child/fav-cities.component";
import { CityComponent } from "./decorators/content-child/city.component";
import { WriterComponent } from "./decorators/view-child/writer.component";

@NgModule({
  declarations: [
    AppComponent,
    CustomProductCarouselComponent,
    SpartacusHeroBannerComponent,
    CustomLoginFormComponent,
    DecoratorsComponent,
    ViewChildComponent,
    WriterComponent,
    ContentChildComponent,
    FavouriteFriendsComponent,
    FavouriteCitiesComponent,
    CityComponent,
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
        path: "decorators", // url '/decorators'
        component: DecoratorsComponent,
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
