import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningClientComponent } from './planning-client.component';

describe('PlanningClientComponent', () => {
  let component: PlanningClientComponent;
  let fixture: ComponentFixture<PlanningClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanningClientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanningClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
