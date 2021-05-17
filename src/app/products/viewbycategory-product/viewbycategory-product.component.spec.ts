import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbycategoryProductComponent } from './viewbycategory-product.component';

describe('ViewbycategoryProductComponent', () => {
  let component: ViewbycategoryProductComponent;
  let fixture: ComponentFixture<ViewbycategoryProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewbycategoryProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbycategoryProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
