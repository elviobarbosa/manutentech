import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
  title = 'MANUTENTEK';
  
  ngOnInit() {
    console.log('AppComponent');
    this._themeService.loadTheme().subscribe(res => console.log(res));
  }
}
