import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBeachClientComponent } from './info-beach-client.component';

describe('InfoBeachClientComponent', () => {
  let component: InfoBeachClientComponent;
  let fixture: ComponentFixture<InfoBeachClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoBeachClientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoBeachClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
