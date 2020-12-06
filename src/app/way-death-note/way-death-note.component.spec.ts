import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WayDeathNoteComponent } from './way-death-note.component';

describe('WayDeathNoteComponent', () => {
  let component: WayDeathNoteComponent;
  let fixture: ComponentFixture<WayDeathNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WayDeathNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WayDeathNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
