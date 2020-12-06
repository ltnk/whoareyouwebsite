import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WayHeaderComponent } from './way-header.component';

describe('WayHeaderComponent', () => {
  let component: WayHeaderComponent;
  let fixture: ComponentFixture<WayHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WayHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WayHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
