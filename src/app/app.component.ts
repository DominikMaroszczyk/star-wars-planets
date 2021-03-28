import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private mainContentDiv!: ElementRef<HTMLElement>;

  constructor(private readonly router: Router) {}

  /**
    Whenever a new route is activated
    @param _event
  */
  onActivate(_event: any): void {
    console.log('tak');

    // Scrolling back to the top
    // Reference: https://stackoverflow.com/questions/48048299/angular-5-scroll-to-top-on-every-route-click/48048822
    if (this.mainContentDiv) {
      (this.mainContentDiv.nativeElement as HTMLElement).scrollTop = 0;
    }
  }
}
