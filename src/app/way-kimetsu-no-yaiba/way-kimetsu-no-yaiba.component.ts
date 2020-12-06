import { Component, OnInit } from '@angular/core';
import { KimetsuService } from '../Shared/kimetsu.service';

@Component({
  selector: 'app-way-kimetsu-no-yaiba',
  templateUrl: './way-kimetsu-no-yaiba.component.html',
  styleUrls: ['./way-kimetsu-no-yaiba.component.scss'],
})
export class WayKimetsuNoYaibaComponent implements OnInit {
  kimetsuQuizEnglish: any[];
  kimetsuCharacters: any[];
  currentQuestion = 0;
  answerCharacter;
  tanjiro = 0;
  zenitsu = 0;
  inosuke = 0;

  constructor(public kimetsuService: KimetsuService) {}

  ngOnInit() {
    this.getCharacters();
    this.getQuizEnglish();
  }

  getCharacters() {
    this.kimetsuCharacters = this.kimetsuService.getKimetsuCharacters();
  }
  getQuizEnglish() {
    this.kimetsuQuizEnglish = this.kimetsuService.getKimetsuQuizEnglish();
  }

  goToNextQuestion() {
    this.currentQuestion += 1;
  }
  takeValue(value) {
    console.log(value);
    if (value === this.kimetsuQuizEnglish[0].rep1) {
      this.tanjiro += 1;
    } else if (value === this.kimetsuQuizEnglish[0].rep2) {
      this.zenitsu += 1;
    } else if (value === this.kimetsuQuizEnglish[0].rep3) {
      this.inosuke += 1;
    } else if (value === this.kimetsuQuizEnglish[1].rep1) {
      this.tanjiro += 1;
    } else if (value === this.kimetsuQuizEnglish[1].rep2) {
      this.zenitsu += 1;
    } else if (value === this.kimetsuQuizEnglish[1].rep3) {
      this.inosuke += 1;
    } else if (value === this.kimetsuQuizEnglish[2].rep1) {
      this.inosuke += 1;
    } else if (value === this.kimetsuQuizEnglish[2].rep2) {
      this.zenitsu += 1;
    } else if (value === this.kimetsuQuizEnglish[2].rep3) {
      this.tanjiro += 1;
    } else if (value === this.kimetsuQuizEnglish[4].rep1) {
      this.zenitsu += 1;
    } else if (value === this.kimetsuQuizEnglish[4].rep2) {
      this.tanjiro += 1;
    } else if (value === this.kimetsuQuizEnglish[4].rep3) {
      this.inosuke += 1;
    } else if (value === this.kimetsuQuizEnglish[3].rep1) {
      this.inosuke += 1;
    } else if (value === this.kimetsuQuizEnglish[3].rep2) {
      this.tanjiro += 1;
    } else if (value === this.kimetsuQuizEnglish[3].rep3) {
      this.zenitsu += 1;
    }

    if (this.tanjiro > this.zenitsu && this.tanjiro > this.inosuke) {
      this.answerCharacter = this.kimetsuCharacters[0];
    } else if (this.zenitsu > this.tanjiro && this.zenitsu > this.inosuke) {
      this.answerCharacter = this.kimetsuCharacters[1];
    } else if (this.inosuke > this.tanjiro && this.inosuke > this.zenitsu) {
      this.answerCharacter = this.kimetsuCharacters[2];
    }
  }
}
