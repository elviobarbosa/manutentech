import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { ThemePalette } from '@angular/material/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  themeConfig: ThemePalette | null = null;

  private _http = inject(HttpClient)

  loadTheme() {
    return this._http.get<ThemePalette>('/assets/material-theme.json')
      .pipe(
        tap(config => this.themeConfig = config),
        tap(() => console.log(this.themeConfig))
      );
  }
}
