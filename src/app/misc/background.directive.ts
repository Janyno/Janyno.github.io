import { Directive, HostListener, Renderer2, Inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {
  constructor(
    private renderer: Renderer2,
    private datePipe: DatePipe,
    @Inject(DOCUMENT) private document: Document
  ) {}

  @HostListener('window:load', ['$event'])
  @HostListener('window:scroll', ['$event'])
  setBackgroundBasedOnTime() {
    const currentMonth = new Date().getMonth() + 1;
    const currentHour = new Date().getHours();

    const isWinter = currentMonth >= 10 || currentMonth <= 1;

    const isDaytime = currentHour >= 6 && currentHour < 18;

    let backgroundImage = '';

    if (isWinter) {
      backgroundImage = isDaytime ? 'assets/images/minecraft/winterday.webp' : 'assets/images/minecraft/winter.webp';
    } else {
      backgroundImage = isDaytime ? this.getRandomDaytimeBackground() : this.getRandomNighttimeBackground();
    }

    this.renderer.setStyle(this.document.body, 'background-image', `url(${backgroundImage})`)
    
  }

  private getRandomDaytimeBackground(): string {
    const daytimeImages = [
      'assets/images/minecraft/cherry.webp',
      'assets/images/minecraft/barn.webp',
      'assets/images/tsushima/nature.webp',
      'assets/images/tsushima/nature2.webp'
    ];

    const randomIndex = Math.floor(Math.random() * daytimeImages.length);

    return daytimeImages[randomIndex];
  }

  private getRandomNighttimeBackground(): string {
    const nighttimeImages = [
      'assets/images/minecraft/nightsea.webp', 
      'assets/images/minecraft/trainstation.webp'
    ];

    const randomIndex = Math.floor(Math.random() * nighttimeImages.length);

    return nighttimeImages[randomIndex];
  }
}
