import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomProductViewComponent } from './custom-product-view.component';

describe('CustomProductViewComponent', () => {
  let component: CustomProductViewComponent;
  let fixture: ComponentFixture<CustomProductViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomProductViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomProductViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
