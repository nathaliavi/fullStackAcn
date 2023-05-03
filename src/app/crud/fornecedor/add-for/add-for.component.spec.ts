import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddForComponent } from './add-for.component';

describe('AddForComponent', () => {
  let component: AddForComponent;
  let fixture: ComponentFixture<AddForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddForComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
