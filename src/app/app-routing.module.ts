import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { GreetingComponent } from './greeting/greeting.component';
import { StatisticComponent } from './statistic/statistic.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: "greeting", component: GreetingComponent},
  {path: "welcome", component: WelcomeComponent},
  {path: "game", component: GameComponent},
  {path: "statistic", component: StatisticComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
