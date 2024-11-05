import { Component, inject, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { ThemeService } from './shared/services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  _themeService = inject(ThemeService);
  private readonly _router = inject(Router);
  private readonly _renderer = inject(Renderer2);
  
  private _routerSubscription!: Subscription;
  
  ngOnInit() {
    alert('AppComponent ok');
  //  this._themeService.loadTheme().subscribe(res => console.log(res));
    console.log('AppComponent ok');
    this._routerSubscription = this._router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.updateBodyClass(event.urlAfterRedirects);
    });
  }

  private updateBodyClass(url: string): void {
    console.log(url);
    this._renderer.removeClass(document.body, 'login-page');
    this._renderer.removeClass(document.body, 'about-page');
    this._renderer.removeClass(document.body, 'contact-page');

    if (url === '/login') {
      this._renderer.addClass(document.body, 'login-page');
    } else if (url === '/about') {
      this._renderer.addClass(document.body, 'about-page');
    } else if (url === '/contact') {
      this._renderer.addClass(document.body, 'contact-page');
    }
  }
}
