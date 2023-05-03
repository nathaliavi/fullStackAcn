import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsForComponent } from './details-for.component';

describe('DetailsForComponent', () => {
  let component: DetailsForComponent;
  let fixture: ComponentFixture<DetailsForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsForComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
