import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingButClientComponent } from './booking-but-client.component';

describe('BookingButClientComponent', () => {
  let component: BookingButClientComponent;
  let fixture: ComponentFixture<BookingButClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingButClientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookingButClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
