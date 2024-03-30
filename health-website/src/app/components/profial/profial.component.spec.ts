import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfialComponent } from './profial.component';

describe('ProfialComponent', () => {
  let component: ProfialComponent;
  let fixture: ComponentFixture<ProfialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
