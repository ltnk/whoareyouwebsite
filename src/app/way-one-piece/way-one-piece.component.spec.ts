import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WayOnePieceComponent } from './way-one-piece.component';

describe('WayOnePieceComponent', () => {
  let component: WayOnePieceComponent;
  let fixture: ComponentFixture<WayOnePieceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WayOnePieceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WayOnePieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
