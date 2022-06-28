import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNewlistComponent } from './edit-newlist.component';

describe('EditNewlistComponent', () => {
  let component: EditNewlistComponent;
  let fixture: ComponentFixture<EditNewlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNewlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditNewlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
