import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WayHomeComponent } from './way-home.component';

describe('WayHomeComponent', () => {
  let component: WayHomeComponent;
  let fixture: ComponentFixture<WayHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WayHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WayHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
