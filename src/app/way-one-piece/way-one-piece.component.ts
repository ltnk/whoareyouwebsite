import { Component, OnInit } from '@angular/core';
import { OnePieceService } from '../Shared/one-piece.service';

@Component({
  selector: 'app-way-one-piece',
  templateUrl: './way-one-piece.component.html',
  styleUrls: ['./way-one-piece.component.scss'],
})
export class WayOnePieceComponent implements OnInit {
  onePieceQuizEnglish: any[];
  onePieceCharacters: any[];
  currentQuestion = 0;
  answerCharacter;
  luffy = 0;
  zoro = 0;
  nami = 0;
  usopp = 0;

  constructor(public onePieceService: OnePieceService) {}

  ngOnInit() {
    this.getCharacters();
    this.getQuizEnglish();
    console.log(this.onePieceQuizEnglish);
  }

  getCharacters() {
    this.onePieceCharacters = this.onePieceService.getOnePieceCharacters();
  }
  getQuizEnglish() {
    this.onePieceQuizEnglish = this.onePieceService.getOnePieceQuizEnglish();
  }

  goToNextQuestion() {
    this.currentQuestion += 1;
  }
  takeValue(value) {
    console.log(value);
    if (value === this.onePieceQuizEnglish[0].rep1) {
      this.luffy += 1;
    } else if (value === this.onePieceQuizEnglish[0].rep2) {
      this.nami += 1;
    } else if (value === this.onePieceQuizEnglish[0].rep3) {
      this.zoro += 1;
    } else if (value === this.onePieceQuizEnglish[0].rep4) {
      this.usopp += 1;
    } else if (value === this.onePieceQuizEnglish[1].rep1) {
      this.zoro += 1;
    } else if (value === this.onePieceQuizEnglish[1].rep2) {
      this.usopp += 1;
    } else if (value === this.onePieceQuizEnglish[1].rep3) {
      this.luffy += 1;
    } else if (value === this.onePieceQuizEnglish[1].rep4) {
      this.nami += 1;
    } else if (value === this.onePieceQuizEnglish[2].rep1) {
      this.usopp += 1;
    } else if (value === this.onePieceQuizEnglish[2].rep2) {
      this.luffy += 1;
    } else if (value === this.onePieceQuizEnglish[2].rep3) {
      this.nami += 1;
    } else if (value === this.onePieceQuizEnglish[2].rep4) {
      this.zoro += 1;
    } else if (value === this.onePieceQuizEnglish[3].rep1) {
      this.nami += 1;
    } else if (value === this.onePieceQuizEnglish[3].rep2) {
      this.luffy += 1;
    } else if (value === this.onePieceQuizEnglish[3].rep3) {
      this.usopp += 1;
    } else if (value === this.onePieceQuizEnglish[3].rep4) {
      this.zoro += 1;
    } else if (value === this.onePieceQuizEnglish[4].rep1) {
      this.nami += 1;
    } else if (value === this.onePieceQuizEnglish[4].rep2) {
      this.zoro += 1;
    } else if (value === this.onePieceQuizEnglish[4].rep3) {
      this.luffy += 1;
    } else if (value === this.onePieceQuizEnglish[4].rep4) {
      this.usopp += 1;
    }

    if (
      this.luffy > this.zoro &&
      this.luffy > this.nami &&
      this.luffy > this.usopp
    ) {
      this.answerCharacter = this.onePieceCharacters[0];
    } else if (
      this.zoro > this.luffy &&
      this.zoro > this.nami &&
      this.zoro > this.usopp
    ) {
      this.answerCharacter = this.onePieceCharacters[1];
    } else if (
      this.nami > this.luffy &&
      this.nami > this.zoro &&
      this.nami > this.usopp
    ) {
      this.answerCharacter = this.onePieceCharacters[2];
    } else if (
      this.usopp > this.luffy &&
      this.usopp > this.zoro &&
      this.usopp > this.nami
    ) {
      this.answerCharacter = this.onePieceCharacters[3];
    }
  }
}
