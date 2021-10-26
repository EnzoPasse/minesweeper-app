import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Board } from '../models/board.model';
import { Cell } from '../models/cell.model';

import { takeUntil } from 'rxjs/operators';
import { DificultEnum } from '../controls/controls.component';
import { GameService } from 'src/app/services/game.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, OnDestroy {

  board!: Board;
  $destroy = new Subject<void>();
  DificultEnum = DificultEnum;
  status!: boolean
  subscriptions: Subscription[] = [];

  constructor(private game: GameService,
    private snack: MatSnackBar) { }
  



  ngOnInit(): void {


    this.subscriptions.push(this.game.$stateGame.pipe(takeUntil(this.$destroy)).subscribe(res => this.status = res))

    this.subscriptions.push(this.game.$gameConfig.pipe(takeUntil(this.$destroy))
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
      ))
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(subs => subs.unsubscribe());
  }



  checkCell(cell: Cell): void {
    const result = this.board.checkCell(cell);
    if (result === 'gameover') {
      this.game.changeStateGame(false);
      this.openSnackBar('GAME OVER!.. intenta otra vez');
      //alert('GAME OVER');
    } else if (result === 'win') {
      this.game.changeStateGame(false);
      this.openSnackBar('GANASTE!');
    }
  }

  addFlag(cell: Cell): void {
    this.board.addFlag(cell);
  }



  openSnackBar(message: string): void {
    this.snack.open(message, 'X',
      {
        duration: 10000,
        panelClass: 'center'
      }
    );
  }
}