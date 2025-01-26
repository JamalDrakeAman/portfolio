import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-comp',
  standalone: true,
  imports: [],
  templateUrl: './project-comp.component.html',
  styleUrl: './project-comp.component.scss'
})
export class ProjectCompComponent {

  @Input() project = {
    name: 'Join',
    skills: 'JavaScript | HTML | CSS',
    description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    img: 'projects/join-kanban-img.png'
  }


}
