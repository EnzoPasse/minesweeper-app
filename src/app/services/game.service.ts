import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

private gameConfig : BehaviorSubject<string> = new BehaviorSubject<string>('easy');
private stateGame : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

$gameConfig = this.gameConfig.asObservable();
$stateGame = this.stateGame.asObservable();



  constructor() { }


changeGameConfig(newState: string):void {
  this.gameConfig.next(newState);
  this.changeStateGame(true);
}  

changeStateGame(newState: boolean): void {
  this.stateGame.next(newState);
}

}
