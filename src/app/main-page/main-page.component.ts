import { Component, HostListener } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { PortfolioSectionComponent } from './portfolio-section/portfolio-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { CommonModule } from '@angular/common';
import { FeedbackSectionComponent } from './feedback-section/feedback-section.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    HeroSectionComponent,
    AboutMeSectionComponent,
    SkillsSectionComponent,
    PortfolioSectionComponent,
    FeedbackSectionComponent,
    ContactSectionComponent,
    CommonModule
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  scrollPosition = 0;

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.scrollPosition = window.scrollY;
  }

}
