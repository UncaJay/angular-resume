import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameTime } from './game-time';

describe('GameTime', () => {
  let component: GameTime;
  let fixture: ComponentFixture<GameTime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameTime]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameTime);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
