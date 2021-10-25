import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';


export enum DificultEnum  {
  easy = 'easy', 
  medium ='medium', 
  hard = 'hard'
}

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})

export class ControlsComponent {
  
  selectedValue = 'easy';
  DificultEnum = DificultEnum;

  constructor( private game: GameService) { }

  onClick() {
    this.game.changeState(this.selectedValue);
  }
}
