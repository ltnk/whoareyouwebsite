import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OnePieceService {
  constructor() {}

  onePieceCharacters = [
    {
      pseudo: `luffy`,
      name: `Monkey D. Luffy (モンキー・D・ルフィ)`,
      description: `Luffy is very cheerful and happy. He is optimistic even when it is difficult to be. He loves his friends and
      will do anything for them.`,
    },
    {
      pseudo: `zoro`,
      name: `Roronoa Zoro (ロロノア・ゾロ)`,
      description: `Zoro is very strong. He is hard, you do not have his friendship easily but one you have it,
      it is for life !`,
    },
    {
      pseudo: `nami`,
      name: `Nami`,
      description: `Nami is a very cute du strong girl. She can do anything and do not let anyone to tell her
      what to do. She follows her own path.`,
    },
    {
      pseudo: `usopp`,
      name: `Usopp`,
      description: `Behind his playful and strong facade, Usopp does not trust 100% in himself. He is really scared of the
      ennemies. But if he has to fight, he will !`,
    },
  ];

  onePieceQuizEnglish = [
    {
      questionNumber: 1,
      title: `If you have to choose a carreer :`,
      rep1: `Pirate !`,
      rep2: `Cartographer !`,
      rep3: `Fencer !`,
      rep4: `Story teller !`,
    },
    {
      questionNumber: 2,
      title: `Your friends love you because of :`,
      rep1: `Your strengh`,
      rep2: `Your sense of humor`,
      rep3: `Your ability to focus on your dream`,
      rep4: `Everything, you are very lovable !`,
    },
    {
      questionNumber: 3,
      title: `When you see an enemy :`,
      rep1: `You try to avoid it`,
      rep2: `You never attack first`,
      rep3: `You try to fool him`,
      rep4: `You fight`,
    },
    {
      questionNumber: 4,
      title: `You are very meticulous and check all the details when you do a project !`,
      rep1: `True and even more than that !`,
      rep2: `Not really, you just go forth it !`,
      rep3: `You are meticulous, but not 100% !`,
      rep4: `Usually you take care of most of the things, but not all the details`,
    },
    {
      questionNumber: 5,
      title: `Do you check you food before eating it ?`,
      rep1: `Are you kidding ? All the time !`,
      rep2: `No, not really`,
      rep3: `Not at all !`,
      rep4: `Sometimes ...`,
    },
  ];

  getOnePieceCharacters() {
    return this.onePieceCharacters;
  }
  getOnePieceQuizEnglish() {
    return this.onePieceQuizEnglish;
  }
}
