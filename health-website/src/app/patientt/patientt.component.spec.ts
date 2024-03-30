import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatienttComponent } from './patientt.component';

describe('PatienttComponent', () => {
  let component: PatienttComponent;
  let fixture: ComponentFixture<PatienttComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatienttComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatienttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
