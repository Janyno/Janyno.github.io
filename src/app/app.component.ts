import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  snowflakes: any[] = [];

  ngOnInit(): void {
    this.createSnowflakes();
  }

  createSnowflakes(): void {
    for (let i = 0; i < 50; i++) {
      this.snowflakes.push({
        left: Math.random() * window.innerWidth,
        speed: Math.random() * 2 + 0.5
      });
    }
  }
}
