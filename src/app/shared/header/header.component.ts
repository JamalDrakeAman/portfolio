import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  currentLanguage = 'en';

  openOverlay() {
    let overlay = document.getElementById('menu-overlay');
    if (overlay) {
      overlay.classList.toggle('hide-overlay'); // Menü umschalten

      if (overlay.classList.contains('hide-overlay')) {
        document.body.classList.remove('no-scroll'); // Scrolling aktivieren
      } else {
        document.body.classList.add('no-scroll'); // Scrolling deaktivieren
      }
    }
  }


  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    const savedLanguage = localStorage.getItem('currentLanguage');
    if (savedLanguage) {
      this.currentLanguage = savedLanguage;
    }
    this.translate.use(this.currentLanguage);
  }

  toggleLanguage(): void {
    this.currentLanguage = this.currentLanguage === 'en' ? 'de' : 'en';
    this.translate.use(this.currentLanguage);
    localStorage.setItem('currentLanguage', this.currentLanguage);
  }


}


