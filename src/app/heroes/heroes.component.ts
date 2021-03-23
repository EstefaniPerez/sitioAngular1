import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero'; 
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero ={
    id: 1,
    name: 'Spiderman',
    identidad: 'Peter P',
    universo: 'marvel',
    super: 'fisiologia de las arañas'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
