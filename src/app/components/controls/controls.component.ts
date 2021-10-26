import { Component, OnInit } from '@angular/core';
import { Subject, Subscription, timer } from 'rxjs';
import { subscribeOn, takeUntil } from 'rxjs/operators';
import { GameService } from 'src/app/services/game.service';


export enum DificultEnum {
  easy = 'easy',
  medium = 'medium',
  hard = 'hard'
}

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})

export class ControlsComponent implements OnInit {

  selectedValue = 'easy';
  DificultEnum = DificultEnum;
  timer = timer(0, 1000);
  timeSubs: Subscription[] = [];
  countTime = 0;
  $destroy = new Subject<void>();

  constructor(private game: GameService) { }


  ngOnInit(): void {
    this.game.$stateGame.pipe(takeUntil(this.$destroy)).subscribe(res => {
      if (res) {
        this.timeSubs.push(this.timer.subscribe(res => this.countTime = res));
      } else {
        this.timeSubs.forEach(subs => subs.unsubscribe());
      }

    });
  }

  onClick() {
    this.timeSubs.forEach(subs => subs.unsubscribe());
    this.game.changeGameConfig(this.selectedValue);
  }
}
