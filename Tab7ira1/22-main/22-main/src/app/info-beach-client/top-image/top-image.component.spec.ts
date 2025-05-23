import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopImageComponent } from './top-image.component';

describe('TopImageComponent', () => {
  let component: TopImageComponent;
  let fixture: ComponentFixture<TopImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
