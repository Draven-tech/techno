import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoachChatPage } from './coach-chat.page';

describe('CoachChatPage', () => {
  let component: CoachChatPage;
  let fixture: ComponentFixture<CoachChatPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachChatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
