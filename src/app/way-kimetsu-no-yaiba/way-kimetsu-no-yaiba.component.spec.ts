import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WayKimetsuNoYaibaComponent } from './way-kimetsu-no-yaiba.component';

describe('WayKimetsuNoYaibaComponent', () => {
  let component: WayKimetsuNoYaibaComponent;
  let fixture: ComponentFixture<WayKimetsuNoYaibaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WayKimetsuNoYaibaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WayKimetsuNoYaibaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
