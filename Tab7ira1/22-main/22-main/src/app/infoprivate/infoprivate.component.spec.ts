import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoprivateComponent } from './infoprivate.component';

describe('InfoprivateComponent', () => {
  let component: InfoprivateComponent;
  let fixture: ComponentFixture<InfoprivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoprivateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoprivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
