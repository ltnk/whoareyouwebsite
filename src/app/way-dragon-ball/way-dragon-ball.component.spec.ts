import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WayDragonBallComponent } from './way-dragon-ball.component';

describe('WayDragonBallComponent', () => {
  let component: WayDragonBallComponent;
  let fixture: ComponentFixture<WayDragonBallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WayDragonBallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WayDragonBallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
