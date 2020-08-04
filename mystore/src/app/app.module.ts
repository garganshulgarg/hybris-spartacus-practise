import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  BrowserModule,
  BrowserTransferStateModule,
} from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { translationChunksConfig, translations } from "@spartacus/assets";
import { I18nModule, UrlModule } from "@spartacus/core";
import {
  B2cStorefrontModule,
  CarouselModule,
  GenericLinkModule,
  IconModule,
  MediaModule,
  NavigationModule,
} from "@spartacus/storefront";
import { AppComponent } from "./app.component";
import { BindingComponent } from "./binding-component/binding.component";
import { EventEmitComponent } from "./binding-component/event-emit/event-emit.component";
import { CustomCategoryNavigationComponent } from "./custom-category-navigation/custom-category-navigation.component";
import { CustomLoginFormComponent } from "./custom-login-form/custom-login-form.component";
import { CustomNavigationUIComponentComponent } from "./custom-navigation-uicomponent/custom-navigation-uicomponent.component";
import { CustomProductCarouselComponent } from "./custom-product-carousel/custom-product-carousel.component";
import { MouseActionDirective } from "./directives/attribute-directives/action-directive";
import { StyleDirectives } from "./directives/attribute-directives/style-directives";
import { DirectivesComponent } from "./directives/directives.component";
import { EmpComponent } from "./directives/ng-directives/emp.component";
import { NgDirectivesComponent } from "./directives/ng-directives/ng-directives.component";
import { DelayDirective } from "./directives/structural-directives/structural-delay-directive";
import { SpartacusHeroBannerComponent } from "./spartacus-hero-banner/spartacus-hero-banner.component";
import { PipesComponent } from "./pipes/pipes.component";

@NgModule({
  declarations: [
    AppComponent,
    CustomProductCarouselComponent,
    SpartacusHeroBannerComponent,
    CustomCategoryNavigationComponent,
    CustomLoginFormComponent,
    DirectivesComponent,
    DelayDirective,
    StyleDirectives,
    MouseActionDirective,
    NgDirectivesComponent,
    EmpComponent,
    CustomNavigationUIComponentComponent,
    BindingComponent,
    EventEmitComponent,
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
        CategoryNavigationComponent: {
          component: CustomCategoryNavigationComponent,
        },
        NavigationUIComponent: {
          component: CustomNavigationUIComponentComponent,
        },
        ReturningCustomerLoginComponent: {
          //component name should be same as mentioned in the cms
          component: CustomLoginFormComponent,
        },
      },
    }),
    BrowserTransferStateModule,

    MediaModule,
    CarouselModule,
    RouterModule,
    NavigationModule,
    ReactiveFormsModule,
    UrlModule,
    FormsModule,
    IconModule,
    GenericLinkModule,
    I18nModule,
    FormsModule,
    RouterModule.forRoot([
      //register route component
      {
        path: "binding", // url '/binding'
        component: BindingComponent,
      },
      {
        path: "directives", // url will be 'https://localhost:4200/directives'
        component: DirectivesComponent,
      },
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
  ],
  entryComponents: [
    CustomProductCarouselComponent,
    SpartacusHeroBannerComponent,
    CustomLoginFormComponent,
    CustomCategoryNavigationComponent,
    CustomNavigationUIComponentComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
