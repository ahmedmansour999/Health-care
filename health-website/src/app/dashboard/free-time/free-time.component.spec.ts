import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeTimeComponent } from './free-time.component';

describe('FreeTimeComponent', () => {
  let component: FreeTimeComponent;
  let fixture: ComponentFixture<FreeTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreeTimeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FreeTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
