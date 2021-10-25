import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { BoardComponent } from './components/game/board/board.component';
import { CellComponent } from './components/game/cell/cell.component';
import { ControlsComponent } from './components/game/controls/controls.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    BoardComponent,
    CellComponent,
    ControlsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
