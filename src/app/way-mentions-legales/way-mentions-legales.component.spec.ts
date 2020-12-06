import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WayMentionsLegalesComponent } from './way-mentions-legales.component';

describe('WayMentionsLegalesComponent', () => {
  let component: WayMentionsLegalesComponent;
  let fixture: ComponentFixture<WayMentionsLegalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WayMentionsLegalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WayMentionsLegalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
