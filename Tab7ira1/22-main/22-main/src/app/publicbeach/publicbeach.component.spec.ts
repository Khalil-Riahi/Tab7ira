import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicbeachComponent } from './publicbeach.component';

describe('PublicbeachComponent', () => {
  let component: PublicbeachComponent;
  let fixture: ComponentFixture<PublicbeachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PublicbeachComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PublicbeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
