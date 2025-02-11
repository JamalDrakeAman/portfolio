import { Component } from '@angular/core';
import { FeedbackCompComponent } from '../components/feedback-comp/feedback-comp.component';

@Component({
  selector: 'app-feedback-section',
  standalone: true,
  imports: [
  FeedbackCompComponent
  ],
  templateUrl: './feedback-section.component.html',
  styleUrl: './feedback-section.component.scss'
})
export class FeedbackSectionComponent {

}
