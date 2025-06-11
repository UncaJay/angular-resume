import { Component } from '@angular/core';

@Component({
  selector: 'app-game-time',
  imports: [],
  templateUrl: './game-time.html',
  styleUrl: './game-time.css'
})
export class GameTime {
  ps4: Array<any> = [
    {name: 'Rise of the Tomb Raider'},
    {name: 'Assassin\'s Creed: Valhalla'},
    {name: 'Marvel\'s Spider-Man', website: 'https://www.playstation.com/en-us/games/marvels-spider-man/'},
  ];

  steam: Array<any> = [
    {name: 'Civilization VII'}
  ];
}
