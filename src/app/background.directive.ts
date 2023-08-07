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
  setBackgroundBasedOnTime(event: Event) {
    const currentMonth = new Date().getMonth() + 1; // Month is 0-indexed, so we add 1.
    const currentHour = new Date().getHours();

    // Check if it's winter (October to January)
    const isWinter =
      currentMonth >= 10 || currentMonth <= 1;

    // Check if it's daytime (between 6 AM and 6 PM)
    const isDaytime = currentHour >= 6 && currentHour < 18;

    let backgroundClass = '';

    if (isWinter) {
      backgroundClass = isDaytime ? 'winter-day-bg' : 'winter-night-bg';
    } else {
      backgroundClass = isDaytime ? this.getRandomDaytimeBackground() : this.getRandomNighttimeBackground();
    }

    this.renderer.setAttribute(this.document.body, 'class', backgroundClass);
  }

  private getRandomDaytimeBackground(): string {
    // List of available daytime background images for other seasons
    const daytimeImages = ['daytime-bg', 'daytime-bg-alt1'];

    // Get a random index to select a daytime image
    const randomIndex = Math.floor(Math.random() * daytimeImages.length);

    // Return the selected daytime image class
    return daytimeImages[randomIndex];
  }

  private getRandomNighttimeBackground(): string {
    // List of available nighttime background images for other seasons
    const nighttimeImages = ['nighttime-bg', 'nighttime-bg-alt1'];

    // Get a random index to select a nighttime image
    const randomIndex = Math.floor(Math.random() * nighttimeImages.length);

    // Return the selected nighttime image class
    return nighttimeImages[randomIndex];
  }
}
