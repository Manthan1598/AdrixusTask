import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOnchangeComponent } from './ng-onchange.component';

describe('NgOnchangeComponent', () => {
  let component: NgOnchangeComponent;
  let fixture: ComponentFixture<NgOnchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgOnchangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgOnchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
