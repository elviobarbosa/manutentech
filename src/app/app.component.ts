import { Component, inject, OnInit, Renderer2 } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { urls } from './shared/config/urls.config';
import { mainMenu } from './shared/config/menu.config';
import { MAT_DATE_LOCALE } from '@angular/material/core';
// import { ThemeService } from './shared/services/theme.service';

@Component({
    selector: 'app-root',
    imports: [
      RouterOutlet,
      MatToolbarModule,
      RouterModule,
      MatMenuModule,
      MatButtonModule,
      MatIconModule,
      MatSidenavModule,
      MatListModule
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    providers:[
      { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }
    ]
})
export class AppComponent implements OnInit {
  //private readonly _themeService = inject(ThemeService);
  private readonly _router = inject(Router);
  private readonly _renderer = inject(Renderer2);
  private _routerSubscription!: Subscription;

  public showMenuHeader = false;
  public menuLeft = mainMenu;
  
  ngOnInit() {
    this._routerSubscription = this._router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.updateBodyClass(event.urlAfterRedirects);
      const noMenuRoutes = [urls.login, urls.forgotPassword];
      this.showMenuHeader = !noMenuRoutes.includes(event.url);
    });
  }

  private updateBodyClass(url: string): void {
    this._renderer.removeClass(document.body, 'login-page');
    this._renderer.removeClass(document.body, 'about-page');
    this._renderer.removeClass(document.body, 'contact-page');

    if (url === urls.login) {
      this._renderer.addClass(document.body, 'login-page');
    } else if (url === '/about') {
      this._renderer.addClass(document.body, 'about-page');
    } else if (url === '/contact') {
      this._renderer.addClass(document.body, 'contact-page');
    }
  }
}
