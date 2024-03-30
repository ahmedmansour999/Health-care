import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsPartComponent } from './departments-part.component';

describe('DepartmentsPartComponent', () => {
  let component: DepartmentsPartComponent;
  let fixture: ComponentFixture<DepartmentsPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartmentsPartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DepartmentsPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
