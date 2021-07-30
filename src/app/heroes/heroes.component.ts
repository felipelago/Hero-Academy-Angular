import { HEROES } from '../mock-heroes';
import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  selectedHero?: Hero; //Ou: Hero | Undefined

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
