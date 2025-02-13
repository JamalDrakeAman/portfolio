import { Component } from '@angular/core';
import { FeedbackCompComponent } from '../components/feedback-comp/feedback-comp.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-feedback-section',
  standalone: true,
  imports: [
    FeedbackCompComponent,
    CommonModule,
    TranslateModule
  ],
  templateUrl: './feedback-section.component.html',
  styleUrl: './feedback-section.component.scss'
})
export class FeedbackSectionComponent {

  feedbackIndex = 0

  feedbacks = [
    {
      name: "P.Ivan",
      img: "profile/paul-ivan.jpg",
      label: "Fullstack Developer",
      feedback: "In the short time I got to know Jamal, I found out that he's someone who thinks out of the box. Someone who doesn't shy away when it's getting hard. Someone who's looking and applying solutions and betterment at every step. He is the kind of guy I would start a project at any time."
    },
    {
      name: "R.Pinto",
      img: "profile/user-img.png",
      label: "Frontend Developer",
      feedback: "Die Zusammenarbeit mit Jamal war großartig. Er überzeugte durch technisches Know-how und Teamfähigkeit. Unsere Gruppenarbeit hat er mit seinen Ideen klar bereichert. Absolut empfehlenswert!"
    },
    // {
    //   name: "M",
    //   img: "profile/user-img.png",
    //   label: "Team Partner",
    //   feedback: "dfgdfddf trhvdfthdrfthgfvh sgstrhdrsthrdfhrdht rdthtdfhzftgh tdfhdfgthftgh hzgfdhfgtzhzft dfggbhdrfthbdt gdftbhdfbfdb bdthbd"
    // }
  ]


  back() {
    this.feedbackIndex = (this.feedbackIndex - 1 + this.feedbacks.length) % this.feedbacks.length;
    this.timeOutAnimation('back');
  }

  next() {
    this.feedbackIndex = (this.feedbackIndex + 1) % this.feedbacks.length;
    this.timeOutAnimation('next');
  }

  timeOutAnimation(direction: string) {
    let container = document.getElementById('feedback');
    if (container) {
      container.className = ''
      setTimeout(() => {
        container?.classList.add(`feedback-item-${direction}`);
      }, 10);
    }
  }

}
