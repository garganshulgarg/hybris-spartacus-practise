import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomNavigationUIComponentComponent } from './custom-navigation-uicomponent.component';

describe('CustomNavigationUIComponentComponent', () => {
  let component: CustomNavigationUIComponentComponent;
  let fixture: ComponentFixture<CustomNavigationUIComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomNavigationUIComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomNavigationUIComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
