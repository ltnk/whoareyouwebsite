import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WayHomeComponent } from './way-home/way-home.component';

import { MatButtonModule } from '@angular/material/button';
import { WayDeathNoteComponent } from './way-death-note/way-death-note.component';
import { WayDragonBallComponent } from './way-dragon-ball/way-dragon-ball.component';
import { WayOnePieceComponent } from './way-one-piece/way-one-piece.component';
import { WayKimetsuNoYaibaComponent } from './way-kimetsu-no-yaiba/way-kimetsu-no-yaiba.component';
import { WayMentionsLegalesComponent } from './way-mentions-legales/way-mentions-legales.component';
import { WayHeaderComponent } from './way-header/way-header.component';
import { WayLogoComponent } from './way-logo/way-logo.component';
import { WayQuestionComponent } from './components/way-question/way-question.component';
import { WayResponseComponent } from './components/way-response/way-response.component';
import { DeathNoteQuizService } from './Shared/death-note-quiz.service';
import { DragonBallService } from './Shared/dragon-ball.service';
import { KimetsuService } from './Shared/kimetsu.service';
import { OnePieceService } from './Shared/one-piece.service';

@NgModule({
  declarations: [
    AppComponent,
    WayHomeComponent,
    WayDeathNoteComponent,
    WayDragonBallComponent,
    WayOnePieceComponent,
    WayKimetsuNoYaibaComponent,
    WayMentionsLegalesComponent,
    WayHeaderComponent,
    WayLogoComponent,
    WayQuestionComponent,
    WayResponseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [
    DeathNoteQuizService,
    DragonBallService,
    KimetsuService,
    OnePieceService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
