import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DeathNoteQuizService {
  deathNoteCharacter = [
    {
      pseudo: 'light',
      name: `Light Yagami (夜神 月, Yagami Raito)`,
      description: `Light Yagami is a bored intellectual high
      school student dissatisfied with the Japanese justice system. When he finds a
      Death Note dropped by Ryuk, he envisions to create a world without crime and
      rule over it as its "god". His alias Kira (キラ), derived from the English
      word killer, is quickly popularized and draws the attention of the Japanese
      police and L. Though initially sensitive to the pain of others, Light's
      descent into his role as Kira marks a dramatic change in his personality as he
      becomes comfortable with manipulating people's lives. (source: wikipedia)`,
    },
    {
      pseudo: 'elle',
      name: `L Lawliet (Ｌ・ローライト, Eru Rōraito)`,
      description: `L Lawliet, known solely as L, is the
      world's greatest detective and the main antagonist in the Death Note. He takes
      on the task of tracking down and arresting Kira. He only ever wears shoes in
      public, just to take them off as soon as he sits down. His disheveled
      appearance and constant playing with his food, which usually consists of candy
      or fruit, causes people to doubt his position as L. He lives in solitude, and
      only his manager Watari is able to contact him directly. L suspects that Light
      is Kira almost from the beginning, but cannot confirm his suspicions (although
      they are right). (source: wikipedia)`,
    },
    {
      pseudo: 'ryuk',
      name: `Ryuk (リューク, Ryūku) `,
      description: `Ryuk is a bored Shinigami that drops a Death Note, a
      notebook that allows the one in its possession to kill anyone simply by
      knowing their name and face, into the human world in order to have fun. It is
      picked up by Light Yagami, a young genius who uses it in an attempt to create
      and rule a world "cleansed of evil" as "God". (source: wikipedia)`,
    },
    {
      pseudo: 'misa',
      name: `Misa Amane (弥 海砂, Amane Misa) `,
      description: `Misa Amane is a popular Japanese idol, who is
      known for her Gothic-style of dress, hyperactive personality and devotion to
      Light, falling in love with him after he kills her parents' murderer. As a
      Death Note owner and the second Kira, she has the Shinigami Eyes, which allow
      her to see nearly everyone's name and lifespan. However, she cannot see the
      lifespans of Death Note owners. As part of her career as an idol, she performs
      numerous jobs such as acting, singing and modeling. (source: wikipedia)`,
    },
  ];

  deathNoteQuizFr = [
    {
      questionNumber: 1,
      title: 'Tes amis disent de toi que tu es :',
      rep1: 'Beau mais froid',
      rep2: 'Très chaleureux',
      rep3: 'Que tu fais peur parfois',
      rep4: `Tu n'as pas d'amis`,
    },
    {
      questionNumber: 2,
      title: 'Quelle couleur est dominante dans ta garde-robe ?',
      rep1: 'Les couleurs vives',
      rep2: 'Le noir',
      rep3: 'Les couleurs sobre',
      rep4: `Tu n'en sais rien !`,
    },
    {
      questionNumber: 3,
      title: 'Pour toi, quelle phrase ressemble le plus à la vie ?',
      rep1: 'On né, on vit, on meurt',
      rep2:
        'On né, on vit de la manière la plus merveilleuse possible, on meurt',
      rep3: 'On né, on fait de son mieux, on meurt',
      rep4: 'On né, on est le meilleur, on meurt',
    },
    {
      questionNumber: 4,
      title: 'Tu adores :',
      rep1: 'Les chips',
      rep2: 'Les sucreries',
      rep3: 'Les fruits',
      rep4: 'Les boissons sucrées',
    },
    {
      questionNumber: 5,
      title: `Ta meilleure amie te présente son nouveau petit ami qui se trouve être le mec le plus idiot que tu n'aies jamais rencontré :`,
      rep1: 'Tu le dit à ta meilleure amie.',
      rep2: 'Tu le dit au mec.',
      rep3: `Tu t'en fout`,
      rep4:
        'En fait ce mec tu le trouves plutôt gentil et aimerais lui donner une chance de se rattraper.',
    },
  ];

  deathNoteQuizEnglish = [
    {
      questionNumber: 1,
      title: 'What do your friends say about you ?',
      rep1: 'Beautiful but cold',
      rep2: 'Very nice !',
      rep3: '"You scare me sometimes !"',
      rep4: `You don't have any friends`,
    },
    {
      questionNumber: 2,
      title: 'What color do you have the most in your dressing ?',
      rep1: 'Bright colors',
      rep2: 'Black',
      rep3: 'Dark and sober colors',
      rep4: `You don't know actually !`,
    },
    {
      questionNumber: 3,
      title: 'Which sentence define life the most ?',
      rep1: 'We born, we live, we die',
      rep2: 'We born, we live a wonderful life, we die',
      rep3: 'We born, we do the best that we can, we die',
      rep4: 'We born, become the best, we die',
    },
    {
      questionNumber: 4,
      title: 'The food you love :',
      rep1: 'Chips',
      rep2: 'Candies and Chocolate',
      rep3: 'Fruits',
      rep4: 'Cold drinks with sugar',
    },
    {
      questionNumber: 5,
      title: `Your best friend introduces you to her new boyfriend, you immediately think that he is the biggest jerk you
      have seen so far :`,
      rep1: 'You tell it to you best friend !',
      rep2: 'You tell it to the guy !',
      rep3: `You don't care !`,
      rep4:
        'Actually, the guy should not be that bad, you will give him a chance !',
    },
  ];
  constructor() {}

  getDeatNoteCharacter() {
    return this.deathNoteCharacter;
  }
  getDeathNoteQuizEnglish() {
    return this.deathNoteQuizEnglish;
  }
}
