import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingPracticeComponent } from './binding-practice.component';

describe('BindingPracticeComponent', () => {
  let component: BindingPracticeComponent;
  let fixture: ComponentFixture<BindingPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BindingPracticeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BindingPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
