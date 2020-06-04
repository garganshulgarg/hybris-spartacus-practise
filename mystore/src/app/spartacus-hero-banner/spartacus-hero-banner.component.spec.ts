import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpartacusHeroBannerComponent } from './spartacus-hero-banner.component';

describe('SpartacusHeroBannerComponent', () => {
  let component: SpartacusHeroBannerComponent;
  let fixture: ComponentFixture<SpartacusHeroBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpartacusHeroBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpartacusHeroBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
