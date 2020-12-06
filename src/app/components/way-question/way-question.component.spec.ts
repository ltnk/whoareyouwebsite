import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WayQuestionComponent } from './way-question.component';

describe('WayQuestionComponent', () => {
  let component: WayQuestionComponent;
  let fixture: ComponentFixture<WayQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WayQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WayQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
