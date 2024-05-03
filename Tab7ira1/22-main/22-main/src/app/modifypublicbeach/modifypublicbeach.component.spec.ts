import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifypublicbeachComponent } from './modifypublicbeach.component';

describe('ModifypublicbeachComponent', () => {
  let component: ModifypublicbeachComponent;
  let fixture: ComponentFixture<ModifypublicbeachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModifypublicbeachComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifypublicbeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
