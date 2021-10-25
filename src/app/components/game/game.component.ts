import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Board } from '../models/board.model';
import { Cell } from '../models/cell.model';
import { GameService } from './game.service';

import { takeUntil } from 'rxjs/operators';
import { DificultEnum } from './controls/controls.component';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  board!: Board;
  $destroy = new Subject<void>();
  DificultEnum = DificultEnum


  constructor(private game: GameService) { /* this.initBoard(5,5) */ }



  ngOnInit(): void {

    this.game.$state.pipe(takeUntil(this.$destroy))
      .subscribe(res => {
        switch (res) {
          case DificultEnum.medium:
            this.board = new Board(8, 15);
            break;

          case DificultEnum.hard:
            this.board = new Board(10, 20);
            break;

          default:
            this.board = new Board(6, 5);
            break;
        }

      }
      )



  }


  /* initBoard(cells: number, mines: number) {
    this.board = new Board(10, 15);
  } */

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
