import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewlistComponent } from './create-newlist.component';

describe('CreateNewlistComponent', () => {
  let component: CreateNewlistComponent;
  let fixture: ComponentFixture<CreateNewlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
