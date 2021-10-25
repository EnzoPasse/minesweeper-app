import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

private state : BehaviorSubject<string> = new BehaviorSubject<string>('easy');

$state = this.state.asObservable();

  constructor() { }


changeState(newState: string):void {
  this.state.next(newState);
}  

}
