import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WayHomeComponent } from './way-home/way-home.component';
import { WayDeathNoteComponent } from './way-death-note/way-death-note.component';
import { WayDragonBallComponent } from './way-dragon-ball/way-dragon-ball.component';
import { WayKimetsuNoYaibaComponent } from './way-kimetsu-no-yaiba/way-kimetsu-no-yaiba.component';
import { WayOnePieceComponent } from './way-one-piece/way-one-piece.component';
import { WayMentionsLegalesComponent } from './way-mentions-legales/way-mentions-legales.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: WayHomeComponent },
  { path: 'death-note', component: WayDeathNoteComponent },
  { path: 'dragon-ball', component: WayDragonBallComponent },
  { path: 'kimetsu-no-yaiba', component: WayKimetsuNoYaibaComponent },
  { path: 'one-piece', component: WayOnePieceComponent },
  { path: 'mentions-legales', component: WayMentionsLegalesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
