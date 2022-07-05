import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HagglingComponent } from './haggling.component';

describe('HagglingComponent', () => {
  let component: HagglingComponent;
  let fixture: ComponentFixture<HagglingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HagglingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HagglingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
