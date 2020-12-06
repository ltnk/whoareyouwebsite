import { Component, OnInit } from '@angular/core';
import { DragonBallService } from '../Shared/dragon-ball.service';

@Component({
  selector: 'app-way-dragon-ball',
  templateUrl: './way-dragon-ball.component.html',
  styleUrls: ['./way-dragon-ball.component.scss'],
})
export class WayDragonBallComponent implements OnInit {
  dragonBallQuizEnglish: any[];
  dragonBallCharacters: any[];
  currentQuestion = 0;
  answerCharacter;
  goku = 0;
  bulma = 0;
  krillin = 0;
  piccolo = 0;

  constructor(public dragonBallQuizService: DragonBallService) {}

  ngOnInit() {
    this.getCharacters();
    this.getQuizEnglish();
  }

  getCharacters() {
    this.dragonBallCharacters = this.dragonBallQuizService.getDragonBallCharacters();
  }
  getQuizEnglish() {
    this.dragonBallQuizEnglish = this.dragonBallQuizService.getDragonBallQuizEnglish();
  }

  goToNextQuestion() {
    this.currentQuestion += 1;
  }
  takeValue(value) {
    console.log(value);
    if (value === this.dragonBallQuizEnglish[0].rep1) {
      this.bulma += 1;
    } else if (value === this.dragonBallQuizEnglish[0].rep2) {
      this.goku += 1;
    } else if (value === this.dragonBallQuizEnglish[0].rep3) {
      this.piccolo += 1;
    } else if (value === this.dragonBallQuizEnglish[0].rep4) {
      this.krillin += 1;
    } else if (value === this.dragonBallQuizEnglish[1].rep1) {
      this.goku += 1;
    } else if (value === this.dragonBallQuizEnglish[1].rep2) {
      this.piccolo += 1;
    } else if (value === this.dragonBallQuizEnglish[1].rep3) {
      this.krillin += 1;
    } else if (value === this.dragonBallQuizEnglish[1].rep4) {
      this.bulma += 1;
    } else if (value === this.dragonBallQuizEnglish[2].rep1) {
      this.krillin += 1;
    } else if (value === this.dragonBallQuizEnglish[2].rep2) {
      this.bulma += 1;
    } else if (value === this.dragonBallQuizEnglish[2].rep3) {
      this.piccolo += 1;
    } else if (value === this.dragonBallQuizEnglish[2].rep4) {
      this.goku += 1;
    } else if (value === this.dragonBallQuizEnglish[3].rep1) {
      this.goku += 1;
    } else if (value === this.dragonBallQuizEnglish[3].rep2) {
      this.bulma += 1;
    } else if (value === this.dragonBallQuizEnglish[3].rep3) {
      this.piccolo += 1;
    } else if (value === this.dragonBallQuizEnglish[3].rep4) {
      this.krillin += 1;
    } else if (value === this.dragonBallQuizEnglish[4].rep1) {
      this.krillin += 1;
    } else if (value === this.dragonBallQuizEnglish[4].rep2) {
      this.piccolo += 1;
    } else if (value === this.dragonBallQuizEnglish[4].rep3) {
      this.bulma += 1;
    } else if (value === this.dragonBallQuizEnglish[4].rep4) {
      this.goku += 1;
    }

    if (
      this.goku > this.bulma &&
      this.goku > this.krillin &&
      this.goku > this.piccolo
    ) {
      this.answerCharacter = this.dragonBallCharacters[0];
    } else if (
      this.bulma > this.goku &&
      this.bulma > this.krillin &&
      this.bulma > this.piccolo
    ) {
      this.answerCharacter = this.dragonBallCharacters[1];
    } else if (
      this.krillin > this.goku &&
      this.krillin > this.bulma &&
      this.krillin > this.piccolo
    ) {
      this.answerCharacter = this.dragonBallCharacters[2];
    } else if (
      this.piccolo > this.goku &&
      this.piccolo > this.krillin &&
      this.piccolo > this.bulma
    ) {
      this.answerCharacter = this.dragonBallCharacters[3];
    }
  }
}
