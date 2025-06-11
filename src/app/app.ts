import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TabsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-app';

  about: boolean = false;
  projects: boolean = false;
  games: boolean = false;

  private router = inject(Router);
  private _route: string = '';

  public get route(): string {
    return this._route;
  }

  public set route(v: string) {
    this._route = v;

    this.router.navigate([v]);
  }

  constructor() {
    this.goToRoute('about');
   }

  goToRoute(route: string) {
    this.route = route;

    this.about = this.projects = this.games = false;

    if (route == 'about') {
      this.about = true;
    } else if (route == 'games') {
      this.games = true;
    } else if (route == 'projects') {
      this.projects = true;
    } else {
      console.error('Invalid');
    }
  }

}
