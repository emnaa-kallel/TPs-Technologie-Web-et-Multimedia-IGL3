import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { App } from './app/app';
import { Home } from './app/home/home';
import { Game } from './app/game/game';

bootstrapApplication(App, {
  providers: [
    provideRouter([
      { path: '', component: Home },
      { path: 'game', component: Game },
      { path: '**', redirectTo: '' }
    ])
  ]
});
