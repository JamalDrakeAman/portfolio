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

}
