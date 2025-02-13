import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feedback-comp',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './feedback-comp.component.html',
  styleUrl: './feedback-comp.component.scss'
})
export class FeedbackCompComponent {


  @Input() feedback = {
    name: "P.Ivan",
    img: "profile/user-img.png",
    label: "Frontend Developer",
    feedback: "In the short time I got to know Jamal, I found out that he's someone who thinks out of the box. Someone who doesn't shy away when it's getting hard. Someone who's looking and applying solutions and betterment at every step. He is the kind of guy I would start a project at any time."
  }
}
