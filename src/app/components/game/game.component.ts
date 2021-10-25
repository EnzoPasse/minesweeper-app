import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Board } from '../models/board.model';
import { Cell } from '../models/cell.model';

import { takeUntil } from 'rxjs/operators';
import { DificultEnum } from '../controls/controls.component';
import { GameService } from 'src/app/services/game.service';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  board!: Board;
  $destroy = new Subject<void>();
  DificultEnum = DificultEnum;
  status!: boolean


  constructor(private game: GameService) { }



  ngOnInit(): void {


    this.game.$stateGame.subscribe(res => {this.status = res; console.log(res)}
    )

    this.game.$gameConfig.pipe(takeUntil(this.$destroy))
      .subscribe(res => {
       switch (res) {
          case DificultEnum.medium:
            this.board = new Board(8, 11);
            break;

          case DificultEnum.hard:
            this.board = new Board(10, 16);
            break;

          default:
            this.board = new Board(6, 6);
            break;
        }

      }
      )
  }


  

  checkCell(cell: Cell): void {
    const result = this.board.checkCell(cell);
    if (result === 'gameover') {
      this.game.changeStateGame(false);
      alert('GAME OVER');
    } else if (result === 'win') {
      this.game.changeStateGame(false);
      alert('YOU WIN');
    }
  }

  addFlag(cell: Cell): void {
    this.board.addFlag(cell);
  }

}
