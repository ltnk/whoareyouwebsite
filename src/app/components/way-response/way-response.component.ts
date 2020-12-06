import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-way-response',
  templateUrl: './way-response.component.html',
  styleUrls: ['./way-response.component.scss'],
})
export class WayResponseComponent implements OnInit {
  @Input() route: string;
  @Input() response: string;
  @Input() backColor: string;
  @Input() color: string;
  constructor() {}

  ngOnInit() {}
}
