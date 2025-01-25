import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.scss'
})
export class SkillsSectionComponent {

  skills = [
    {
      name: 'HTML',
      icon: 'skills-icon/html.svg',
    },
    {
      name: 'CSS',
      'icon': 'skills-icon/css.svg',
    },
    {
      name: 'JavaScript',
      icon: 'skills-icon/javascript.svg'
    },
    {
      name: 'TypeScript',
      icon: 'skills-icon/typescript.svg'
    },
    {
      name: 'Angular',
      icon: 'skills-icon/angular.svg'
    },
    {
      name: 'Firebase',
      icon: 'skills-icon/firebase.svg'
    },
    {
      name: 'Git',
      icon: 'skills-icon/git.svg'
    },
    {
      name: 'Rest Api',
      icon: 'skills-icon/api-icon.svg'
    },
    {
      name: 'Scrum',
      icon: 'skills-icon/scrum.svg'
    },
    {
      name: 'Material Design',
      icon: 'skills-icon/material-design.svg'
    }



  ]
}





