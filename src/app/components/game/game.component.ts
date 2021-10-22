import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Board } from './board/board.model';
import { Cell } from './cell/cell.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  board!: Board;



  constructor() { this.initBoard() }


  initBoard() {
    this.board = new Board(4, 1);
  }

  checkCell(cell: Cell): void {
    const result = this.board.checkCell(cell);
    if (result === 'gameover') {
      alert('GAME OVER');
    } else if (result === 'win') {
      alert('YOU WIN');
    }
  }

  addFlag(cell: Cell): void {
    this.board.addFlag(cell);
  }

}
