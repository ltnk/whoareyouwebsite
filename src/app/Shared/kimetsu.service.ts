import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class KimetsuService {
  constructor() {}

  kimetsuCharacters = [
    {
      pseudo: `tanjiro`,
      name: `Tanjiro Kamado`,
      description: `Tanjiro is a brave young man. He lost his whole family during a demon attack, he only has his sister left.
      Despite these difficulties, he remains hopeful and has faith in humanity. He works as much as possible to save his sister.`,
    },
    {
      pseudo: `zenitsu`,
      name: `Zenitsu Agatsuma`,
      description: `Zenitsu is a young man with scared-looking eyes. He relies heavily on others and has very little self-confidence.
      He very easily falls in love. He is not fully aware of its value. He cries and cries a lot.`,
    },
    {
      pseudo: `inosuke`,
      name: `Inosuke Hashibira`,
      description: `Inosuke is a demon slayer. He has great confidence in himself and in his abilities. But he also has failures which
      he hides from others. He does not wish to rest on others and wishes to create his own path.`,
    },
  ];

  kimetsuQuizEnglish = [
    {
      questionNumber: 1,
      title: `Do you love your siblings ?`,
      rep1: `More than anything in the world !` /* tanjiro */,
      rep2: `Yes but you do not like to show it.` /* zenitsu */,
      rep3: `I do not have any siblings !` /* inosuke */,
    },
    {
      questionNumber: 2,
      title: `If tomorrow, you loose everything, what will you tell people ?`,
      rep1: `I am sad, but everything is gonna be ok !` /* tanjiro */,
      rep2: `Aaaahhhhhhhhh * you cry *` /* zenitsu */,
      rep3: `- - - * you do not talk to people, if you do not have to *` /* inosuke */,
    },
    {
      questionNumber: 3,
      title: `If a demon wants to kill you : `,
      rep1: `You fight and you are sure you gonna win !` /* inosuke */,
      rep2: `You cry and look for a friend !` /* zenitsu */,
      rep3: `You do your best !` /* tanjiro */,
    },
    {
      questionNumber: 4,
      title: `If you see a sad girl or guy :`,
      rep1: `You do not talk, why ?` /* inosuke */,
      rep2: `You try to talk to her/him` /* tanjiro */,
      rep3: `Omg ! You are in love` /* zenitsu */,
    },
    {
      questionNumber: 5,
      title: `Your favorite color is :`,
      rep1: `Yellow` /* zenitsu */,
      rep2: `Red` /* tanjiro */,
      rep3: `Blue` /* inosuke */,
    },
  ];

  getKimetsuCharacters() {
    return this.kimetsuCharacters;
  }
  getKimetsuQuizEnglish() {
    return this.kimetsuQuizEnglish;
  }
}
