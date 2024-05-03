import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeachCComponent } from './beach-c.component';

describe('BeachCComponent', () => {
  let component: BeachCComponent;
  let fixture: ComponentFixture<BeachCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeachCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeachCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
