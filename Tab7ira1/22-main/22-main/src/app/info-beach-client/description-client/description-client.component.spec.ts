import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionClientComponent } from './description-client.component';

describe('DescriptionClientComponent', () => {
  let component: DescriptionClientComponent;
  let fixture: ComponentFixture<DescriptionClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DescriptionClientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DescriptionClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
