import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditClothingComponent } from './add-edit-clothing.component';

describe('AddEditClothingComponent', () => {
  let component: AddEditClothingComponent;
  let fixture: ComponentFixture<AddEditClothingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditClothingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditClothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
