import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackCompComponent } from './feedback-comp.component';

describe('FeedbackCompComponent', () => {
  let component: FeedbackCompComponent;
  let fixture: ComponentFixture<FeedbackCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
