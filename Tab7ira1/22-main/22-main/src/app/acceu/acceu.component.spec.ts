import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuComponent } from './acceu.component';

describe('AcceuComponent', () => {
  let component: AcceuComponent;
  let fixture: ComponentFixture<AcceuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcceuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcceuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
