import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditForComponent } from './edit-for.component';

describe('EditForComponent', () => {
  let component: EditForComponent;
  let fixture: ComponentFixture<EditForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditForComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
