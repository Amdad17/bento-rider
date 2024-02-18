import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiderComponent } from './rider.component';

describe('RiderComponent', () => {
  let component: RiderComponent;
  let fixture: ComponentFixture<RiderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RiderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
