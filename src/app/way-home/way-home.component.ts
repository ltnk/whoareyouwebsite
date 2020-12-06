import { Component, OnInit } from '@angular/core';
import { DeathNoteQuizService } from '../Shared/death-note-quiz.service';

@Component({
  selector: 'app-way-home',
  templateUrl: './way-home.component.html',
  styleUrls: ['./way-home.component.scss'],
})
export class WayHomeComponent implements OnInit {
  deathNoteQuizEnglish;
  deathNoteCharacter;
  constructor(private deathNoteQuizService: DeathNoteQuizService) {}

  ngOnInit() {}

  goToDeathNoteQuiz() {
    this.deathNoteQuizEnglish = this.deathNoteQuizService.deathNoteQuizEnglish;
    this.deathNoteCharacter = this.deathNoteQuizService.deathNoteCharacter;
  }
}
