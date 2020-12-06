import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WayResponseComponent } from './way-response.component';

describe('WayResponseComponent', () => {
  let component: WayResponseComponent;
  let fixture: ComponentFixture<WayResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WayResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WayResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
