import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';



@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule
  ],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {

}
