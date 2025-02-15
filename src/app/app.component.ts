import { Component, OnInit, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

import AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  isTouchDevice: boolean = false;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    // Überprüfen, ob das Gerät ein Touch-Gerät ist
    this.isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    AOS.init({
      duration: 500,  // Dauer der Animationen
      easing: 'ease-in-out',
      // once: true       // Animationen nur einmal abspielen
    });
  }

  ngAfterViewInit(): void {
    // Sicherstellen, dass der Glow-Effekt dynamisch hinzugefügt wird, falls nötig
    const glowElement = document.createElement('div');
    glowElement.classList.add('background-glow');
    document.body.appendChild(glowElement);
  }

  // Mousemove-Event nur ausführen, wenn es kein Touch-Gerät ist
  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isTouchDevice) {
      return; // Verhindert den Glow-Effekt auf Touch-Geräten
    }

    const { clientX: x, clientY: y } = event;
    const glow = document.querySelector('.background-glow') as HTMLElement;

    if (glow) {
      glow.style.background = `radial-gradient(circle 60px at ${x}px ${y}px, rgba(0, 190, 232, 0.3), transparent 80%)`;
    }
  }

  // Touchmove-Event für Touch-Geräte
  @HostListener('touchmove', ['$event'])
  onTouchMove(event: TouchEvent) {
    if (!this.isTouchDevice) {
      return; // Verhindert den Touch-Effekt auf Nicht-Touch-Geräten
    }

    const { clientX: x, clientY: y } = event.touches[0];
    const glow = document.querySelector('.background-glow') as HTMLElement;

    if (glow) {
      glow.style.background = `radial-gradient(circle 60px at ${x}px ${y}px, rgba(0, 190, 232, 0.3), transparent 80%)`;
    }
  }


}
