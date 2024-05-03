import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextComComponent } from './text-com.component';

describe('TextComComponent', () => {
  let component: TextComComponent;
  let fixture: ComponentFixture<TextComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextComComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
