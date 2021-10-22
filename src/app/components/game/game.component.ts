import { Component, OnInit } from '@angular/core';
import { Board } from './board/board.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

board = new Board(5,5);


  constructor() { }

  ngOnInit(): void {
  }

}
