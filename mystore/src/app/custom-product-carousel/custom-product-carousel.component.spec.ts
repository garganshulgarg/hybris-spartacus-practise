import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomProductCarouselComponent } from './custom-product-carousel.component';

describe('CustomProductCarouselComponent', () => {
  let component: CustomProductCarouselComponent;
  let fixture: ComponentFixture<CustomProductCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomProductCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomProductCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
