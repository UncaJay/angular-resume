import { Routes } from '@angular/router';
import { GameTime } from './game-time/game-time';
import { About } from './about/about';
import { Projects } from './projects/projects';

export const routes: Routes = [
    {component: GameTime, path: 'games'},
    {component: About, path: 'about'},
    {component: About, path: ''},
    {component: Projects, path: 'projects'}
];
