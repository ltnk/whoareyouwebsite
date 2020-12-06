import { Component, OnInit } from '@angular/core';
import { DeathNoteQuizService } from '../Shared/death-note-quiz.service';

@Component({
  selector: 'app-way-death-note',
  templateUrl: './way-death-note.component.html',
  styleUrls: ['./way-death-note.component.scss'],
})
export class WayDeathNoteComponent implements OnInit {
  deathNoteQuizEnglish: any[];
  deathNoteCharacter: any[];
  currentQuestion = 0;
  answerCharacter;
  light = 0;
  elle = 0;
  ryuk = 0;
  misa = 0;

  constructor(public deathNoteQuizService: DeathNoteQuizService) {}

  ngOnInit() {
    this.getCharacters();
    this.getQuizEnglish();
  }

  getCharacters() {
    this.deathNoteCharacter = this.deathNoteQuizService.getDeatNoteCharacter();
  }
  getQuizEnglish() {
    this.deathNoteQuizEnglish = this.deathNoteQuizService.getDeathNoteQuizEnglish();
  }

  goToNextQuestion() {
    this.currentQuestion += 1;
  }
  takeValue(value) {
    console.log(value);
    if (value === this.deathNoteQuizEnglish[0].rep1) {
      this.light += 1;
    } else if (value === this.deathNoteQuizEnglish[0].rep2) {
      this.misa += 1;
    } else if (value === this.deathNoteQuizEnglish[0].rep3) {
      this.ryuk += 1;
    } else if (value === this.deathNoteQuizEnglish[0].rep4) {
      this.elle += 1;
    } else if (value === this.deathNoteQuizEnglish[1].rep1) {
      this.misa += 1;
    } else if (value === this.deathNoteQuizEnglish[1].rep2) {
      this.ryuk += 1;
    } else if (value === this.deathNoteQuizEnglish[1].rep3) {
      this.light += 1;
    } else if (value === this.deathNoteQuizEnglish[1].rep4) {
      this.elle += 1;
    } else if (value === this.deathNoteQuizEnglish[2].rep1) {
      this.ryuk += 1;
    } else if (value === this.deathNoteQuizEnglish[2].rep2) {
      this.misa += 1;
    } else if (value === this.deathNoteQuizEnglish[2].rep3) {
      this.elle += 1;
    } else if (value === this.deathNoteQuizEnglish[2].rep4) {
      this.light += 1;
    } else if (value === this.deathNoteQuizEnglish[3].rep1) {
      this.light += 1;
    } else if (value === this.deathNoteQuizEnglish[3].rep2) {
      this.elle += 1;
    } else if (value === this.deathNoteQuizEnglish[3].rep3) {
      this.ryuk += 1;
    } else if (value === this.deathNoteQuizEnglish[3].rep4) {
      this.misa += 1;
    } else if (value === this.deathNoteQuizEnglish[4].rep1) {
      this.ryuk += 1;
    } else if (value === this.deathNoteQuizEnglish[4].rep2) {
      this.light += 1;
    } else if (value === this.deathNoteQuizEnglish[4].rep3) {
      this.elle += 1;
    } else if (value === this.deathNoteQuizEnglish[4].rep4) {
      this.misa += 1;
    }

    if (
      this.light > this.ryuk &&
      this.light > this.misa &&
      this.light > this.elle
    ) {
      this.answerCharacter = this.deathNoteCharacter[0];
    } else if (
      this.elle > this.ryuk &&
      this.elle > this.misa &&
      this.elle > this.light
    ) {
      this.answerCharacter = this.deathNoteCharacter[1];
    } else if (
      this.ryuk > this.light &&
      this.ryuk > this.misa &&
      this.ryuk > this.elle
    ) {
      this.answerCharacter = this.deathNoteCharacter[2];
    } else if (
      this.misa > this.ryuk &&
      this.misa > this.light &&
      this.misa > this.elle
    ) {
      this.answerCharacter = this.deathNoteCharacter[3];
    }
  }
}
