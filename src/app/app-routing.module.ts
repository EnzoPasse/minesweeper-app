import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './components/game/game.component';

const routes: Routes = [

  {
    path:'',
    pathMatch:'full',
    redirectTo:'/game'
  },
  
  {
    path:'game',
    component: GameComponent   
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
