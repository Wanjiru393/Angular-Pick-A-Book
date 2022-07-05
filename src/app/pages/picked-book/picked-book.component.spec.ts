import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickedBookComponent } from './picked-book.component';

describe('PickedBookComponent', () => {
  let component: PickedBookComponent;
  let fixture: ComponentFixture<PickedBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickedBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickedBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
