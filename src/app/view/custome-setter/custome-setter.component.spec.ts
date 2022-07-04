import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeSetterComponent } from './custome-setter.component';

describe('CustomeSetterComponent', () => {
  let component: CustomeSetterComponent;
  let fixture: ComponentFixture<CustomeSetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomeSetterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomeSetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
