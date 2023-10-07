import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('navbarCollapse')
  navbarCollapse!: ElementRef

  currentLanguage: string = 'en'
  languages: string[] = ['en', 'de'];

  closeDropdown(): void {
    if (this.navbarCollapse.nativeElement.classList.contains('show')) {
      this.navbarCollapse.nativeElement.classList.remove('show')
    }
  }

  switchLanguage(language: string) {
    this.currentLanguage = language;
  }
}
