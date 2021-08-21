import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkingTomComponent } from './talking-tom.component';

describe('TalkingTomComponent', () => {
  let component: TalkingTomComponent;
  let fixture: ComponentFixture<TalkingTomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalkingTomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalkingTomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
