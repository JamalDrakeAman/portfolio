import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import AOS from 'aos';


@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule
  ],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements AfterViewInit{

  ngAfterViewInit(): void {
    AOS.refresh();
  }
}
