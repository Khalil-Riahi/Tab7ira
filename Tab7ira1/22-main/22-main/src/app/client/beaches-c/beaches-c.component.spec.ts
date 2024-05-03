import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeachesCComponent } from './beaches-c.component';

describe('BeachesCComponent', () => {
  let component: BeachesCComponent;
  let fixture: ComponentFixture<BeachesCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeachesCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeachesCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
