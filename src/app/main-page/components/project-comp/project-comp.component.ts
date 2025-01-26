import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-project-comp',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './project-comp.component.html',
  styleUrl: './project-comp.component.scss'
})
export class ProjectCompComponent {

  @Input() project = {
    name: 'Join',
    skills: 'JavaScript | HTML | CSS',
    description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    img: 'projects/join-kanban-img.png',
    live: '',
    github: 'https://github.com/JamalDrakeAman/Join'
  }

  @Input() projectIndex = 0


  // isEven = num => num % 2 === 0;
  // isOdd = num => num % 2 === 1;

  //   isEven(3); // false
  // isOdd(3); // true

}
