import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DragonBallService {
  constructor() {}

  dragonBallCharacters = [
    {
      pseudo: `goku`,
      name: `Son Goku (孫悟空)`,
      description: `Son Goku , the most prominent protagonist in the series,
      is immensely strong, pure of heart, and extremely competitive, but dedicated to defending
      his adopted home Earth from internal or external threats.`,
    },
    {
      pseudo: `bulma`,
      name: `Buruma (ブルマ)`,
      description: `Bulma first appears as a teenager, using the Dragon Radar,
       a fictional device she created to detect the energy signal emitted by Dragon Balls.
       She is led to Goku's location by the signal emitted by the four-star ball in his possession,
       and ends up recruiting him as a body guard while hoping to get his four-star ball to grant her wish for a boyfriend.`,
    },
    {
      pseudo: `krillin`,
      name: `Kuririn (クリリン)`,
      description: `Krillin in the English anime dub, is a bald martial artist and one of Goku's best friends.
      He is the classmate of Goku under Master Roshi's tutelage; initially his rival but later a friend, and a loyal
      companion in adventures thereafter. He is killed by King Piccolo's spawn Tambourine, but later revived by Shenron.`,
    },
    {
      pseudo: `piccolo`,
      name: `Pikkoro (ピッコロ)`,
      description: `Piccolo is the spawn of King Piccolo, created to get revenge on Goku in the wake of his death,
       subsequently assuming the role as the "evil half" of Kami. However, after just narrowly being defeated by Goku,
        he has to team up with him and his friends when opposing the invading Saiyans, including training Goku's son Gohan.`,
    },
  ];

  dragonBallQuizEnglish = [
    {
      questionNumber: 1,
      title: `The title of you life's book could be :`,
      rep1: `Thank you, it was easy`,
      rep2: `The earth on your shoulders`,
      rep3: `How to become nice`,
      rep4: `I am awkward and I figured it out`,
    },
    {
      questionNumber: 2,
      title: `What people love the most about you is :`,
      rep1: `Your loyalty and strength`,
      rep2: `Your courage and determination`,
      rep3: `Your good humor`,
      rep4: `People loves everything about you !`,
    },
    {
      questionNumber: 3,
      title: `If somebody attack you :`,
      rep1: `You try to fight, but you know that you will have to call your friends eventually.`,
      rep2: `You call your friends, they will figured it out !`,
      rep3: `You fight.`,
      rep4: `You always try to avoid the fight but end up to fight anyway !`,
    },
    {
      questionNumber: 4,
      title: `What do you think about your lover ? (if you do not have any, imagine !)`,
      rep1: `You let her/him do whatever she/he wants and do not really care.`,
      rep2: `Your partner is the best of the universe !`,
      rep3: `You do not have any and do not want to imagine !`,
      rep4: `You let her/him do whatever she/he wants because you love and trust her/him.`,
    },
    {
      questionNumber: 5,
      title: `About food :`,
      rep1: `You eat all the time, but you exercice so it is fine.`,
      rep2: `Everything in moderation.`,
      rep3: `You love to eat, but are afraid of gaining weight !`,
      rep4: `Food ? Food ? Where ??`,
    },
  ];

  getDragonBallCharacters() {
    return this.dragonBallCharacters;
  }
  getDragonBallQuizEnglish() {
    return this.dragonBallQuizEnglish;
  }
}
