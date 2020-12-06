import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-way-question',
  templateUrl: './way-question.component.html',
  styleUrls: ['./way-question.component.scss'],
})
export class WayQuestionComponent implements OnInit {
  @Input() route: string;
  @Input() question: string;

  constructor() {}

  ngOnInit() {}
}
