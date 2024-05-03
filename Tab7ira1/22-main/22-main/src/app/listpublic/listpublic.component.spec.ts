import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpublicComponent } from './listpublic.component';

describe('ListpublicComponent', () => {
  let component: ListpublicComponent;
  let fixture: ComponentFixture<ListpublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListpublicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListpublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
