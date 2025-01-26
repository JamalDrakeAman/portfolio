import { Component } from '@angular/core';
import { ProjectCompComponent } from '../components/project-comp/project-comp.component';



@Component({
  selector: 'app-portfolio-section',
  standalone: true,
  imports: [
    ProjectCompComponent
  ],
  templateUrl: './portfolio-section.component.html',
  styleUrl: './portfolio-section.component.scss'
})
export class PortfolioSectionComponent {

  projects = [
    {
      name: 'Join',
      skills: 'JavaScript | HTML | CSS',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      img: 'projects/join-kanban-img.png',
      live: '',
      github: 'https://github.com/JamalDrakeAman/Join'
    },
    {
      name: 'Captain Pirate',
      skills: 'JavaScript | HTML | CSS',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.',
      img: 'projects/captain-pirate-img.png',
      live: '',
      github: 'https://github.com/JamalDrakeAman/Captain-Pirate'
    },
    {
      name: 'Pokédex',
      skills: 'JavaScript | HTML | CSS | Api',
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      img: 'projects/pokedex-img.png',
      live: '',
      github: 'https://github.com/JamalDrakeAman/Pokedex'
    }

  ]

}
