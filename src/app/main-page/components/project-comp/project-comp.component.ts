import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-project-comp',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule
  ],
  templateUrl: './project-comp.component.html',
  styleUrl: './project-comp.component.scss'
})
export class ProjectCompComponent {

  @Input() project = {
    name: 'Join',
    skills: 'JavaScript | HTML | CSS',
    // description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    img: 'projects/join-kanban-img.png',
    live: '',
    github: 'https://github.com/JamalDrakeAman/Join'
  }

  @Input() projectIndex = 0
  @Input() description: string = '';

  isDisabled(): boolean {
    return !this.project.live || !this.project.github;
  }

}
